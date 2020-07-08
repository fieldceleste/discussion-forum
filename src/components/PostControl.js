import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import  { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

const timestamp = Date.now();
const formattedTime =  new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);

function PostControl(props) {
  const { masterPostList, formVisibleOnPage, selectedPost } = props;

  function handleFormClick() {
    const {dispatch} = props;
    const action = a.toggleForm();
    dispatch(action);
  }
  
  // for adding new post
  const handleAddingNewPostToList = (newPost) =>{
    const {dispatch} = props;
    const {id, post, username, upvotes, downvotes} = newPost;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2)
  }

  // for deleting post
  function handleDeletingPost(id){
    handleDetailNull();
    const {dispatch} = props;
    const action = a.deletePost(id);
    dispatch(action);
  }


// up vote button 
 const handleWhenUpVoteClicked =(upvoteObject) =>{
    const {dispatch} = props;
    const action = a.voteUp(upvoteObject)
    dispatch(action);
  }

  // down vote button
  const handleWhenDownVoteClicked =(downvoteObject) =>{
    const {dispatch} = props;
    const action = a.voteDown(downvoteObject)
    dispatch(action);
  }

  // details of post
  const handleDetailClick = (idDetail) => {
    const {dispatch} = props;
    const selectedPost = Object.values(props.masterPostList).filter(post => post.id === idDetail)[0];
    const {id, post, username, upvotes, downvotes, timestamp} = selectedPost;
    const action = {
      type: "SELECT_POST",
      id: id,
      username: username,
      post: post,
      upvotes: upvotes,
      downvotes: downvotes,
      timestamp: timestamp
    }
    dispatch(action);
  }

  const handleDetailNull = () => {
    const {dispatch} = props;
    const action = {
      type: "SELECT_POST"
    }
    dispatch(action);
  }
  
  
 ///render 
  
    let buttonText = null;
    let buttonPage = null;
    let currentlyVisibleState = null;

    if (props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm 
      onNewPostCreation = { handleAddingNewPostToList } />
      buttonText = "Return to Post list";
      buttonPage = handleFormClick;
      
    } else if (props.selectedPost !== null) {
      console.log(props.selectedPost);
      currentlyVisibleState = <PostDetail
      mainPost = {props.selectedPost}
      onClickingDelete= {handleDeletingPost}/>
      buttonText= "Return To Posts" 
      buttonPage = handleDetailNull;
      
    } else {
      currentlyVisibleState = <PostList 
      postList={props.masterPostList} 
      onPostClick = { handleDetailClick }
      onUpvoteClick = { handleWhenUpVoteClicked }
      onDownvoteClick = { handleWhenDownVoteClicked } />
      buttonText= "Add Post";
      buttonPage = handleFormClick;
    }

    return (
      <React.Fragment> 
        {currentlyVisibleState}
        <br></br>
        <button className="button" onClick={buttonPage}>{buttonText}</button>
      </React.Fragment> 
    );
  }



PostControl.propTypes = {
  masterPostList: PropTypes.object,
  selectedPost: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedPost: state.selectedPost
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;