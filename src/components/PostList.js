import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <React.Fragment>
      {Object.values(props.postList).map((post) => {
        return <Post whenUpvoteClicked = {props.onUpvoteClick}
        whenDownvoteClicked = {props.onDownvoteClick}
        username={post.username}
        id = {post.id}
        post = {post.post}
        upvotes = {post.upvotes}
        downvotes = {post.downvotes} 
        timestamp = {post.timestamp} />
      })}
    </React.Fragment>
  )
}

PostList.propTypes = {
  postList: PropTypes.object,
  onUpvoteClick: PropTypes.func,
  onDownvoteClick: PropTypes.func
}

export default PostList;