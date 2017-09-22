import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, ListGroup, Button } from 'react-bootstrap';
import { appStateActions } from '../actions';
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

function mapDispatchToProps (dispatch) {
  return {
    openCommentModal: (comment) => dispatch(appStateActions.openCommentModal(comment)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);