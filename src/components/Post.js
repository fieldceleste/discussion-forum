import React from "react";
import PropTypes from "prop-types";

  
// function handleNewPostFormSubmission(event) {
//   event.preventDefault();
//   props.onNewPostCreation({
//     id: v4(),
//     username: event.target.username.value,
//     post: event.target.post.value
//   });
// }

// return(
//   <React.Fragment>
//     <form onSubmit={handleNewPostFormSubmission}>

function Post(props){
  return (
    <React.Fragment>

    <div onClick = {() => props.whenPostClicked(props.id)}>
    <h2>{props.username}</h2>
    <p>{props.post}</p>
    <h5>{props.timestamp}</h5>
    <p>UpVotes: {props.upvotes}</p>
    <button onClick = {() => props.whenUpvoteClicked(props.id)} type="submit">Upvote</button>
    <p>DownVotes: {props.downvotes}</p>
    <button onClick = {() => props.whenDownvoteClicked(props.id)} type="submit">Downvote</button>
    </div>

    </React.Fragment>
  )
}
Post.propTypes = {
  username: PropTypes.string,
  post:PropTypes.string,
  timestamp: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes:PropTypes.number,
  whenPostClicked: PropTypes.func,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func
}


export default Post;


