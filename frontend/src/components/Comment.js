import React from 'react';
import { connect } from 'react-redux';
import { appStateActions, commentsActions } from '../actions';
import { ListGroupItem, Badge, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

function Comment(props) {
  const { comment, openModal, deleteComment } = props;
  return (
    <ListGroupItem>
      <div>
        <strong>{comment.author}:</strong> {comment.body}
        <Badge pullRight={true}>{comment.voteScore}</Badge>
        <ButtonGroup style={{float: 'right', marginRight: '10px'}}>
          <Button bsSize="xsmall" onClick={() => openModal(comment)}>
            <Glyphicon glyph="edit" />
          </Button>
          <Button bsSize="xsmall">
            <Glyphicon glyph="thumbs-up" />
          </Button>
          <Button bsSize="xsmall">
            <Glyphicon glyph="thumbs-down" />
          </Button>
          <Button bsSize="xsmall" onClick={() => deleteComment(comment.id)}>
            <Glyphicon glyph="trash" />
          </Button>
        </ButtonGroup>
      </div>
    </ListGroupItem>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    openModal: (comment) => dispatch(appStateActions.openCommentModal(comment)),
    deleteComment: (commentId) => dispatch(commentsActions.deleteComment(commentId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Comment);