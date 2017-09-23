import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, ListGroup, Button } from 'react-bootstrap';
import * as appStateActions from '../actions/appState';
import Comment from './Comment';

class CommentList extends Component {
  addNewComment () {
    const { openCommentModal, postId } = this.props;
    openCommentModal({ parentId: postId});
  }

  render() {
    const { comments } = this.props;
    return (
      <Row style={{marginTop: '25px'}}>
        <ListGroup>
          {comments.map((comment) => {
            return (
              <Comment comment={comment} key={comment.id}/>
            );
          })}
        </ListGroup>
        <Button bsStyle="primary" onClick={() => this.addNewComment()}>Add new comment</Button>
      </Row>
    );
  }
}

function mapStateToProps ({ comments }) {
  return { comments };
}

export default connect(
  mapStateToProps,
  appStateActions
)(CommentList);