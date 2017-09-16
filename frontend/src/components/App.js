import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoriesActions, postsActions } from '../actions';
import * as API from '../utils/api';

class App extends Component {
  componentDidMount () {
    const { setCategories, setPosts } = this.props;
    API.getCategories().then((response) => {
      setCategories(response.categories);
    });
    API.getPosts().then((response) => {
      setPosts(response);
    });
  }

  render() {
    const { categories = [], posts = [] } = this.props;
    return (
      <div>
        <div>
          Posts:
          <ul>
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>
            })}
          </ul>
        </div>
        <div>
          Categories:
          <ul>
            {categories.map((category, index) => {
              return <li key={index}>{category.name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return { categories, posts };
}

function mapDispatchToProps (dispatch) {
  return {
    setCategories: (data) => dispatch(categoriesActions.setCategories(data)),
    setPosts: (data) => dispatch(postsActions.setPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
