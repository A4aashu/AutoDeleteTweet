import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTweet } from './actions';
import {Avatar,Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import './TweetBox.css';

const TweetBox = ({ tweets, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div class="tweetBox">
            
        <div className="tweetBox__input">
        <Avatar size={80} icon={<UserOutlined />} />
            <input
                className="new-tweet-input"
                type="text"
                placeholder="What's Happening"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
                 </div>
                 <div className="upload">
            <Button
                onClick={() => {
                    const isDuplicateText =
                        tweets.some(tweet => tweet.text === inputValue);
                    if (!isDuplicateText) {
                        var dt = new Date();
                        dt.setMinutes(dt.getMinutes() + 1);
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="tweetBox_tweetButton">
                Tweet
            </Button>
        </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tweets: state.tweets,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: (text,endDate) => dispatch(createTweet(text,endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox);