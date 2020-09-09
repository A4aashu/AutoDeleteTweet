export const CREATE_TWEET = 'CREATE_TWEET';
export const createTweet = (text,endDate) => ({
    type: CREATE_TWEET,
    payload: { text,endDate },
});

export const REMOVE_TWEET = 'REMOVE_TWEET';
export const removeTweet = text => ({
    type: REMOVE_TWEET,
    payload: { text },
});