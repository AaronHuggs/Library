import BookItem from './BookItem'

const BookshelfContainer = props => {
    return (props.books.length === 0 ? 
    <div>
        <h2>Your Bookshelf</h2>
        <h4>No books added</h4>
    </div> :
        <div>
            <h2>Your Bookshelf</h2>
            <ul className='bookshelf-container'>
                {props.books.map(book => (
                    <BookItem 
                        key={book.id} 
                        book={book} 
                        removeFromBookshelf={props.removeFromBookshelf}
                    />
                ))}
            </ul>
        </div>
        
    )
}


export default BookshelfContainer