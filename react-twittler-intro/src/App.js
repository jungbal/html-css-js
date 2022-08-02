import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';

console.log(dummyTweets) 

const Sidebar = () => {
  return (
    <section className="sidebar">
    <script src="https://kit.fontawesome.com/14d687cae1.js" crossOrigin="anonymous">
    </script>
    <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          {'total: ' + dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>
    <footer>Copyright @ 2022 Code States</footer>
  </div>;
};


const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src = {tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {tweet.username === "parkhacker" ? 
                <span className = "tweet__username tweet__username--purple">
                  {tweet.username}</span> : <span className = "tweet__username">{tweet.username}</span>}
                <span className = "tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className = "tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <section className = "sidebar"></section>
        <Features />
      </main>
    </div>
  );
};


export { App, Sidebar, Counter, Tweets, Features, Footer };
