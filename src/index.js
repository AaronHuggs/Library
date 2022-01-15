import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import './styles/Mobile.css';
import LibraryContainer from './components/LibraryContainer';
//router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <div className='outer-container'>
      <div className='inner-container'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<LibraryContainer />}></Route>
            </Routes>
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