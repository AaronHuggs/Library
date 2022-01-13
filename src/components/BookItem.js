import '../styles/BookStyles.css';
import {AiOutlineMinusCircle} from 'react-icons/ai'

const BookItem = props => {
    const {id, bookTitle, bookAuthor, bookImage, bookLink} = props.book
    return (
        <div className='bookshelf-item-container'>
            <button onClick={() => props.removeFromBookshelf(id)} className='item-button'>
                <AiOutlineMinusCircle className='remove' />
            </button>
            <p className='title'>{bookTitle}</p>
            <p className='author'>{bookAuthor}</p>
            <a href={bookLink} target="_blank" rel="noreferrer" className='item-link'><img src={bookImage} alt='Book' className='item-image'></img></a>
        </div>
    )
}


export default BookItem