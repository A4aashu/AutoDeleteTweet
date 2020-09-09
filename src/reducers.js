import { CREATE_TWEET, REMOVE_TWEET } from './actions';

export const tweets = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TWEET: {
        const { text, endDate } = payload;
        const newTweet = {
            text,
            endDate,
            isCompleted: false,
        };
        return state.concat(newTweet);
    }
    case REMOVE_TWEET: {
        const { text } = payload;
        return state.filter(tweet => tweet.text !== text);
    }
    default:
        return state;
    }
}