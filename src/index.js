import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import './styles/Mobile.css';
import {BsGithub} from 'react-icons/bs'
import LibraryContainer from './components/LibraryContainer';
//router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <div className='main'>
      <div className='outer-container'></div>
      <div className='inner-container'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<LibraryContainer />}></Route>
            </Routes>
        </BrowserRouter> 
      </div>
      <div className='github'>
        <a href='https://github.com/AaronHuggs' target='_blank' rel="noreferrer">
          <BsGithub></BsGithub>
          <span> @AaronHuggs</span>
        </a>
        
        
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