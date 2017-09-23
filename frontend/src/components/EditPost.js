import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../utils/api';
import * as postsActions from '../actions/posts';
import PostFrom from './PostForm';

class EditPost extends Component {
  constructor(props) {
    super(props);
    const postId = props.match.params.postId;
    const post = props.posts.find((post) => post.id === postId);

    if(post) {
      this.state = {
        id: postId,
        title: post.title,
        author: post.author,
        category: post.category,
        body: post.body,
        postNotFound: false
      };
    } else {
      this.state = {
        postNotFound: true
      }
    }
  }

  componentDidMount () {
    const postId = this.props.match.params.postId;
    if(this.state.postNotFound) {
      API.getPost(postId).then((response) => {
        if(response.id) {
          const { id, title, author, category, body } = response;
          this.setState({
            id,
            title,
            author,
            category,
            body,
            postNotFound: false
          })
        }
      })
    }
  }

  handleChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleSave() {
    const { id, title, author, category, body } = this.state;
    const { editPost, history } = this.props;
    const changes = {
      title,
      author,
      category,
      body
    };
    API.editPost(id, changes).then((post) => {
      const { id, title, author, category, body } = post;
      editPost(id, {
        title,
        author,
        category,
        body
      });
      history.goBack();
    });
  }

  render() {
    const { title, author, category, body, postNotFound } = this.state;
    if (postNotFound) {
      return (<div>Post not found</div>);
    }
    return (
      <PostFrom title={title}
                author={author}
                category={category}
                body={body}
                handleChange={this.handleChange.bind(this)}
                handleSave={this.handleSave.bind(this)}>
      </PostFrom>
    );
  }
}

function mapStateToProps ({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  postsActions
)(EditPost);