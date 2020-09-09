import React from 'react';
import { connect } from 'react-redux';
import TweetBox from './TweetBox';
import Post from './Post';
import { removeTweet } from './actions';
import './Feed.css';

const Feed = ({ tweets = [], onRemovePressed }) => (
    <div className="feed">
            {/*Header*/}
            <div className="feed__header">
        <h2>Home</h2>
        </div>
        <TweetBox />
        {tweets.length>0 ? tweets.map(tweet => (<Post tweet={tweet} onRemovePressed={onRemovePressed} />)):null}
    </div>
);

const mapStateToProps = state => ({
    tweets: state.tweets,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTweet(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);