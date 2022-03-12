import React, {Fragment, useState} from 'react';
import './App.css';

export function App() {

  const quotes = [
    {   id:1,
        text:'some randome text', 
        author: 'author name'
    },
    {
        id:2,
        text: 'blueeeee',
        author: 'blue'
    },
    {
        id:3,
        text: 'reeeeed',
        author: 'red'
    },
    {
        id:4,
        text: 'yelloooow',
        author: 'yellow'
    },
    {
        id:5,
        text: 'greeen',
        author: 'green'
    },
    {
        id:6,
        text: 'greeeeey',
        author: 'grey'
    },
    {
        id:7,
        text: 'piiiink',
        author: 'pink'
    }];
  


  const defaultRandom = Math.floor(Math.random() * (quotes.length))
  const [qIndex, setQindex] = useState(defaultRandom)

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    setQindex(randomNumber);
    console.log(randomNumber);
  }


  return (
    <Fragment>

      <div id='quote-box'>
        <h2 id='text'>
          "{quotes[qIndex].text}
        </h2>
        <p id='author'>- {quotes[qIndex].author}</p>
        <div className='buttons'>
          <ul>
            <li><a id='tweet-quote' target="_blank" href='https://www.twitter.com/intent/tweet'><i className="fa-brands fa-twitter-square"></i></a></li>
            <li><a id='tweet-quote' target="_blank" href='https://www.instagram.com/?hl=es-la'><i className="fa-brands fa-instagram-square"></i></a></li>
          </ul>
          <button id='new-quote' onClick={handleClick}>New quote</button>
        </div>
      </div>

    </Fragment>
  )
}