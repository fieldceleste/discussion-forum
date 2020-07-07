export default (state = {}, action) => {
  const {username, post, upvotes, downvotes, timestamp, id} = action;
  switch (action.type){
    case 'SELECT_POST':
    return {
      [id]: {
        id: id,
        username: username,
        post: post,
        downvotes: downvotes,
        timestamp: timestamp,
        upvotes: upvotes
      }}
    default:
      return state;
  }
};
