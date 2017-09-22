import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { appStateActions, commentsActions } from '../actions';
import * as API from '../utils/api';

class CommentModal extends Component {
  handleSave() {
    const { appState = {}, updateComment } = this.props;
    const { commentFormAuthor, commentFormBody, commentFormId, commentFormParentId } = appState;
    console.log(">>>>", commentFormAuthor, commentFormBody, commentFormId, commentFormParentId, "<<<");
    if (commentFormId) {
      API.editComment(commentFormId, { author: commentFormAuthor, body: commentFormBody })
        .then((comment) => {
          updateComment(comment.id, { author: comment.author, body: comment.body });
        });
    }

  }

  render () {
    const { appState, closeModal, updateAuthor, updateBody } = this.props;
    const { commentFormAuthor, commentFormBody } = appState;

    return (
      <Modal show={appState.showCommentModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FormGroup id="comment-author">
              <ControlLabel>Author</ControlLabel>
              <FormControl
                type="text"
                label="Author"
                placeholder="Enter the comment author"
                value={commentFormAuthor} onChange={(e) => updateAuthor(e.target.value)}>
              </FormControl>
            </FormGroup>
            <FormGroup id="comment-body">
              <ControlLabel>Body</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter the comment body"
                value={commentFormBody} onChange={(e) => updateBody(e.target.value)}>
              </FormControl>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => this.handleSave()}>Save</Button>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps ({ appState, comments }) {
  return { appState, comments };
}

function mapDispatchToProps (dispatch) {
  return {
    closeModal: () => dispatch(appStateActions.closeCommentModal()),
    updateAuthor: (author) => dispatch(appStateActions.setCommentFormAuthor(author)),
    updateBody: (body) => dispatch(appStateActions.setCommentFormBody(body)),
    updateComment: (id, changes) => dispatch(commentsActions.editComment(id, changes))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentModal);
