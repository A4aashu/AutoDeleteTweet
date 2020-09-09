import React,{useState,useEffect, useRef } from 'react';
import './Post.css';
import moment from 'moment';
import {Avatar} from 'antd';
import {UserOutlined,CheckCircleFilled} from '@ant-design/icons';


const Post = ({ tweet, onRemovePressed }) => {
    const [tweetDate, setTweetDate] = useState(0);
    useInterval(() => {
        setTweetDate(new Date());
      }, 60000);
      console.log(moment(tweet.endDate).isBefore(tweetDate));
      if (moment(tweet.endDate).isAfter(tweetDate)) {
    return (
    <div className="post">
        <div className="post__avatar">
            <Avatar size={80} icon={<UserOutlined />} />
            </div>
            <div className="post__body">
            <div className="post__header">
            <div className="post__headerText">
                    <h3>
                    Aashu Yadav  <span><CheckCircleFilled className="post__badge"/></span>
                    </h3>
                </div>
                <div className="post__headerDescription">
        <p>{tweet.text}</p>
        </div>
            </div>
        <div className="buttons-container">
            <button
                onClick={() => onRemovePressed(tweet.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
    </div>
    
);
}
else {
    onRemovePressed(tweet.text);
    return null;
  }
}
function useInterval(callback) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
  
      let id = setInterval(tick, 60000);
      return () => clearInterval(id);
    }, []);
  }

export default Post;