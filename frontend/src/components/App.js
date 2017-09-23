import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as categoriesActions from '../actions/categories';
import * as postsActions from '../actions/posts';
import NavigationBar from './NavigationBar';
import DefaultPage from './DefaultPage';
import CategoryView from './CategoryView';
import PostDetail from './PostDetail';
import NewPost from './NewPost';
import EditPost from './EditPost';
import CommentModal from './CommentModal';

class App extends Component {
  componentDidMount () {
    const { getCategories, getPosts } = this.props;
    getCategories();
    getPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />

          <Route exact path="/" component={DefaultPage}/>

          <Route exact path="/category/:category" component={CategoryView}/>

          <Route exact path="/post/:postId" component={PostDetail}/>

          <Route path="/new-post" component={NewPost}/>

          <Route exact path="/edit/:postId" component={EditPost}/>

          <CommentModal />

        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { ...categoriesActions, ...postsActions })(App);
