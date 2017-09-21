import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as API from '../utils/api';
import { postsActions } from '../actions';
import PostFrom from './PostForm';

class NewPost extends Component {
  state = {
    title: "",
    author: "",
    category: "",
    body: ""
  };

  handleChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleSave() {
    const { title, author, category, body } = this.state;
    const { addPost, history } = this.props;
    const post = {
      id: uuid(),
      title,
      author,
      category,
      body,
      timestamp: Date.now()
    };
    API.addPost(post).then((post) => {
      addPost(post);
      history.goBack();
    });
  }

  render() {
    const { title, author, category, body, isSaving } = this.state;
    return (
      <PostFrom title={title}
                author={author}
                category={category}
                body={body}
                isSaving={isSaving}
                handleChange={this.handleChange.bind(this)}
                handleSave={this.handleSave.bind(this)}>
      </PostFrom>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(postsActions.addPost(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewPost);