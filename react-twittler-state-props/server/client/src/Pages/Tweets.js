// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';


const Tweets = () => {
  const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };
  const [user, setUser] = useState('parkhacker');
  const [msg, setMsg] = useState('');
  const[tweets, setTweets] = useState(dummyTweets);

  const handleButtonClick = (event) => {
    const tweet = {
      id: dummyTweets.length,
      username: user,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content: msg,
      createdAt: new Date().toLocaleDateString('ko-kr'),
      updatedAt: new Date().toLocaleDateString('ko-kr')

    };
    setTweets([tweet, ...tweets])
    
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value)
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value)
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  defaultValue={""}
                  placeholder="your message here.."
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                  value={msg}></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button className="tweetForm__submitButton" onClick={handleButtonClick}>Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {tweets.map((el) => {
          return(
            <Tweet tweet={el} />
        )})}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
