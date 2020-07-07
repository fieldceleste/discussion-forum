import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";

const timestamp = Date.now();
  const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);


function PostControl(props) {
  const { masterPostList, formVisibleOnPage } = props;

  function handleFormClick() {
    const {dispatch} = props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }
  
  // for adding new post
  const handleAddingNewPostToList = (newPost) =>{
    const {dispatch} = props;
    const {id, post, username, upvotes, downvotes} = newPost;
    const action = {
      type: 'ADD_POST',
      id:id,
      username: username,
      post:post,
      upvotes:upvotes,
      downvotes:downvotes,
      timestamp:timestamp
    }
    dispatch(action);
    const action2 ={
      type: 'TOGGLE_FORM'
    }
    dispatch(action2)
  }

  // for deleting post
  function handleDeletingPost(id){
    const {dispatch} = props;
    const action = {
      type: 'DELETE_POST',
      id:id
    }
    dispatch(action);
    this.setState({selectedItem:null});
  }


// up vote button 
 const handleWhenUpVoteClicked =(idUpvote) =>{
    const {dispatch} = props;
    const currentlySelectedPost = Object.values(props.masterPostList).filter(post => post.id === idUpvote)[0];
    const {id, post, username, upvotes, downvotes, timestamp} = currentlySelectedPost;
    const action = {
    type: "UPVOTE_POST",
    id: id,
    username: username,
    post: post,
    upvotes: upvotes,
    downvotes: downvotes,
    timestamp: timestamp
  }
    dispatch(action);
  }

  // down vote button
  const handleWhenDownVoteClicked =(idDownvote) =>{
    const {dispatch} = props;
    const currentlySelectedPost = Object.values(props.masterPostList).filter(post => post.id === idDownvote)[0];
    const {id, post, username, upvotes, downvotes, timestamp} = currentlySelectedPost;
    const action = {
    type: "DOWNVOTE_POST",
    id: id,
    username: username,
    post: post,
    upvotes: upvotes,
    downvotes: downvotes,
    timestamp: timestamp
  }
    dispatch(action);
  }
  
 ///render 
  
    let buttonText = null;
    let buttonPage = null;
    let currentlyVisibleState = null;

    if (props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation = { handleAddingNewPostToList } />
      buttonText = "Return to Post list";
      buttonPage = handleFormClick;
    }
    else {
      currentlyVisibleState = <PostList 
      postList={props.masterPostList} 
      onUpvoteClick = { handleWhenUpVoteClicked }
      onDownvoteClick = { handleWhenDownVoteClicked } />
      buttonText= "Add Post";
      buttonPage = handleFormClick;
    }

    return (
      <React.Fragment> 
        {currentlyVisibleState}
        <br></br>
        <button onClick={buttonPage}>{buttonText}</button>
      </React.Fragment> 
    )

}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;