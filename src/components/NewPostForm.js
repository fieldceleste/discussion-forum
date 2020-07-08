import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewPostForm(props) {
  
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      id: v4(),
      username: event.target.username.value,
      post: event.target.post.value
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          name='username'
          placeholder='username' />
        <br/>
        <textarea
          name='post'
          placeholder='Write your post here' />
        <br/>
        <button className="button btnsubmit" type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm