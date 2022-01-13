import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import LibraryContainer from './components/LibraryContainer';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <div className='outer-container'>
      <div className='inner-container'>
        <BrowserRouter basename='/library'>
          <LibraryContainer />
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  LibraryContainer
    - Header
    - SearchContainer
    - ResultsContainer
    - - ResultItem
    - BookshelfContainer
    - - BookItem
*/