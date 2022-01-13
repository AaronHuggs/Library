import '../styles/BookStyles.css';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const ResultItem = props => {
    const {bookTitle, bookAuthor, bookImage, bookLink} = props.result
    return (
        <div className='item-container'>
            <button onClick={() => props.addToBookshelf(bookLink)} className='item-button'>
                {props.bookOnShelf(bookLink) ? <AiOutlineCheckCircle className='checked'/> : <AiOutlinePlusCircle />}
            </button>
            <p className='title'>{bookTitle}</p>
            <p className='author'>{bookAuthor}</p>
            <a href={bookLink} target="_blank" rel="noreferrer" className='item-link'><img src={bookImage} alt='Book' className='item-image'></img></a>
        </div>
    )
}


export default ResultItem