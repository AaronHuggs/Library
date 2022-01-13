import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import Header from './Header'
import SearchContainer from './SearchContainer'
import ResultsContainer from './ResultsContainer'
import BookshelfContainer from './BookshelfContainer'
import thumbnailNotFound from '../images/book.png'

const LibraryContainer = () => {

    const [results,setResults] = useState([]);
    const [books,setBooks] = useState(getInitialBooks());
    
    useEffect(() => {
        //Store books in local storage
        const temp = JSON.stringify(books);
        localStorage.setItem('books',temp)
    }, [books])

    //Get stored books
    function getInitialBooks() {
        const temp = localStorage.getItem('books')
        const savedBooks = JSON.parse(temp)
        return savedBooks || []
    }
    
    //Create books from the API query response
    const createBookResult = response => {
        console.log(response);
        clearBookResults();
        let newResults = [];
        for(let i=0;i<response.items.length;i++) {
            let title = response.items[i].volumeInfo.title;
            //Limit title length
            let titleLength = 100;
            (title.length > titleLength) ? (
                title = title.substring(0, titleLength - 3) + '...' ) :
                title = title.substring(0, titleLength);
            //Print first author
            let author = response.items[i].volumeInfo.authors;
            if (Array.isArray(author)) author = author[0];
            //If no author is found, use the publisher
            if (author === undefined) author = response.items[i].volumeInfo.publisher;
            //Use a default image if no thumbnail is found
            let image = '';
            try {
                image = response.items[i].volumeInfo.imageLinks.thumbnail;
            }
            catch {
                image = thumbnailNotFound;
            }
            //Get the url for the link
            let link = response.items[i].volumeInfo.infoLink;
            //Get random id
            let id = uuidv4();
            //Check if book is already on the shelf
            let onShelf = bookOnShelf(id);
            //Create new book with random id
            const newBookResult = {
                id: id,
                bookTitle: title,
                bookAuthor: author,
                bookImage: image,
                bookLink: link,
                onShelf: onShelf
            };
            newResults.push(newBookResult);
        }
        setResults(newResults);
    }

    //Clear the results
    const clearBookResults = () => {
        setResults([]);
    }

    //Add book from results to the bookshelf using unique bookLink id
    function addToBookshelf(bookLink) {
        let newBook = {};
        //Find the book to be added in the results array and add it to the bookshelf list
        results.forEach(book => {
            if (book.bookLink === bookLink) {
                newBook = book;
            }
        });
        
        //If not, add it, and remove the added button
        if (!bookOnShelf(bookLink))
            setBooks([...books, newBook]);
    }

    //Check if a book is already in the bookshelf list
    function bookOnShelf(bookLink) {
        let bookAlreadyAdded = false;
        books.forEach(book =>  {
            if (bookLink === book.bookLink) {
                bookAlreadyAdded = true;
            }
        })
        return bookAlreadyAdded;
    }

    //Remove the book from the bookshelf
    function removeFromBookshelf(id) {
        let newBooks = books.filter(book => {
            return book.id !== id;
        });
        setBooks(newBooks);
    }

    return (
        <>
            <Header />
            <SearchContainer 
                createBookResult={createBookResult}
                clearBookResults={clearBookResults}
            />
            <ResultsContainer 
                results={results} 
                clearBookResults={clearBookResults}
                addToBookshelf={addToBookshelf}
                bookOnShelf={bookOnShelf}
            />
            <BookshelfContainer 
                books={books} 
                removeFromBookshelf={removeFromBookshelf}
            />
        </>
    )
}

export default LibraryContainer