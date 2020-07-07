import React from 'react';
import './App.css';
import Header from "./Header";
import PostControl from "./PostControl";
import PostListControl from "./NewPostForm";



function App() {
  return (
  <React.Fragment>
    <Header />
    <PostControl />
  </React.Fragment>
  );
}

export default App;
