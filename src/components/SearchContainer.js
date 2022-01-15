import {useState} from "react"
import '../styles/InputStyle.css';
import {IoSearchSharp} from 'react-icons/io5'

const SearchContainer = props => {


    const [inputText, setInputText] = useState({
        title: '',
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        //Remove whitespaces at the ends, make sure input isn't empty
        if (inputText.title.trim()) {
            console.log(inputText.title);
            requestBookAPI(inputText.title);
            setInputText({
                title: '',
            });
        }
        else {
            setInputText({
                title: '',
            });
        }
    }

    function requestBookAPI(input) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`,{mode:"cors"})
        .then(function(response){
            return(response.json());
        })
        .then(function(response) {
            props.createBookResult(response);
        })
    }

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <input 
                type='text'
                className='input-text'
                placeholder="Book Title/Author..."
                value={inputText.title}
                name='title'
                onChange={onChange}
            />
            <button className='input-submit'>
                <IoSearchSharp />
            </button>
        </form>
    )
}


export default SearchContainer