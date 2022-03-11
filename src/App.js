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
            <li><a id='tweet-quote' href='#'>Twitter</a></li>
            <li><a id='tweet-quote' href='#'>Instagram</a></li>
          </ul>
          <button id='new-quote'>New quote</button>
        </div>
      </div>

    </Fragment>
  )
}