import ResultItem from './ResultItem'
import {GrClear} from 'react-icons/gr'

const ResultsContainer = props => {

    return (props.results.length === 0 ?
        <div>
            <h3>Search for books to add to your bookshelf</h3>
        </div> :
        <div>
            
            <h2>
                Results
                <button 
                    className='results-clear' 
                    onClick={() => {props.clearBookResults()}}
                >
                    <GrClear />
                </button>
            </h2>
            
            <ul className='results-container'>
                {props.results.map(result => (
                    <ResultItem 
                        key={result.id} 
                        result={result} 
                        addToBookshelf={props.addToBookshelf}
                        bookOnShelf={props.bookOnShelf}
                    />
                ))}
            </ul>
        </div>
    )
}


export default ResultsContainer