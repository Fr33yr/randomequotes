import React, {Fragment} from 'react';
import './App.css';

export function App() {

  return (
    <Fragment>

      <div id='quote-box'>
        <h2 id='text'>
          "Randome quote 
        </h2>
        <p id='author'>- AuthorName</p>
        <div className='buttons'>
          <ul>
            <li><a id='tweet-quote' href='#'><i className="fa-brands fa-twitter-square"></i></a></li>
            <li><a id='tweet-quote' href='#'><i className="fa-brands fa-instagram-square"></i></a></li>
          </ul>
          <button id='new-quote'>New quote</button>
        </div>
      </div>

    </Fragment>
  )
}