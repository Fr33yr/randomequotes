import React, {Fragment, useState} from 'react';
import './App.css';

export function App() {

  const quotes = [
    {   id:1,
        text:'Nothing is too wonderful to be true if it be consistent with the laws of nature.', 
        author: 'Michael Faraday'
    },
    {
        id:2,
        text: 'Innovation distinguishes between a leader and a follower.',
        author: 'Steve Jobs'
    },
    {
        id:3,
        text: 'The highest activity a human being can attain is learning for understanding, because to understand is to be free.',
        author: 'Baruch Spinoza'
    },
    {
        id:4,
        text: 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
        author: 'Bill Gates'
    },
    {
        id:5,
        text: 'The world breaks everyone and afterward many are strong at the broken places.',
        author: 'Ernest Hemingway'
    },
    {
        id:6,
        text: 'We cannot solve our problems with the same thinking we used when we created them.',
        author: 'Albert Einstein'
    },
    {
        id:7,
        text: 'We must believe that we are gifted for something and that this thing must be attained.',
        author: 'Marie Curie'
    }];
  


  const defaultRandom = Math.floor(Math.random() * (quotes.length))
  const [qIndex, setQindex] = useState(defaultRandom)

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    setQindex(randomNumber);
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