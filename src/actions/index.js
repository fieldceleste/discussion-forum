import * as c from './ActionTypes';

const timestamp = Date.now();
const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);

export const addPost = (mainPost) => {
  const {username, post, id} = mainPost;
  return {
    type: c.ADD_POST,
    username: username,
    post: post,
    upvotes: 0,
    downvotes: 0,
    timestamp: formattedTime,
    id: id
  }
}

export const voteUp = (mainPost) => {
  const {username, post, upvotes, downvotes, timestamp, id} = mainPost;
  return{
   type: c.UPVOTE_POST,
   username: username,
   post: post,
   id:id,
   upvotes: upvotes,
   downvotes: downvotes,
   timestamp: timestamp
  }
}

export const voteDown = (mainPost) => {
  const {username, post, upvotes, downvotes, timestamp, id} = mainPost;
  return{
   type: c.DOWNVOTE_POST,
   username: username,
   post: post,
   id:id,
   upvotes: upvotes,
   downvotes: downvotes,
   timestamp: timestamp
  }
}

export const deletePost = (id) => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const selectPost =(mainPost) => {
  const {username, post, upvotes, downvotes, timestamp, id} = mainPost;
  return{
   type: c.SELECT_POST,
   username: username,
   post: post,
   id:id,
   upvotes: upvotes,
   downvotes: downvotes,
   timestamp: timestamp
  }
}