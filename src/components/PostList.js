import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <React.Fragment>
    <hr />
      {Object.values(props.postList)
      .sort(function(a, b) {
        return b.upvotes - a.upvotes;
      })
      .map((post) => {
        return <Post 
        whenUpvoteClicked = {props.onUpvoteClick}
        whenDownvoteClicked = {props.onDownvoteClick}
        whenPostClicked = {props.onPostClick}
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
  onDownvoteClick: PropTypes.func,
  onPostClick: PropTypes.func
}

export default PostList;

