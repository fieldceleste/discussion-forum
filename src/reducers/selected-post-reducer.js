export default (state = null, action) => {
  const {username, post, upvotes, downvotes, timestamp, id} = action;
  switch (action.type){
    case 'SELECT_POST':
      if(state === null) {
        return {
            id: id,
            username: username,
            post: post,
            downvotes: downvotes,
            timestamp: timestamp,
            upvotes: upvotes
          }
      } else {
        state = null;
        return state
        }
    default:
      return state;
  }
};
