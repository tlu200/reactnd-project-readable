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
    body: "",
    isSaving: false
  };

  handleChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleSave() {
    const { title, author, category, body } = this.state;
    const { addPost } = this.props;
    const post = {
      id: uuid(),
      title,
      author,
      category,
      body,
      timestamp: Date.now()
    };
    this.setState({isSaving: true});
    API.addPost(post).then((post) => {
      this.setState({
        title: "",
        author: "",
        category: "",
        body: "",
        isSaving: false
      });
      addPost(post);
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