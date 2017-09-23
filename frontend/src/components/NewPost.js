import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as postsActions from '../actions/posts';
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
    addPost({
      id: uuid(),
      title,
      author,
      category,
      body,
      timestamp: Date.now()
    }).then(() => history.goBack());
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

export default connect(null, postsActions)(NewPost);