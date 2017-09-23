import React from 'react';
import { connect } from 'react-redux';
import * as appStateActions from '../actions/appState';
import * as commentsActions from '../actions/comments';
import { ListGroupItem, Badge, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

function Comment(props) {
  const { comment, openCommentModal, deleteComment, upVoteComment, downVoteComment } = props;
  return (
    <ListGroupItem>
      <div>
        <strong>{comment.author}:</strong> {comment.body}
        <Badge pullRight={true}>{comment.voteScore}</Badge>
        <ButtonGroup style={{float: 'right', marginRight: '10px'}}>
          <Button bsSize="xsmall" onClick={() => openCommentModal(comment)}>
            <Glyphicon glyph="edit" />
          </Button>
          <Button bsSize="xsmall" onClick={() => upVoteComment(comment.id)}>
            <Glyphicon glyph="thumbs-up" />
          </Button>
          <Button bsSize="xsmall" onClick={() => downVoteComment(comment.id)}>
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

export default connect(null, { ...appStateActions, ...commentsActions })(Comment);