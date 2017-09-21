import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, ListGroup } from 'react-bootstrap';
import Comment from './Comment';

class CommentList extends Component {
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
      </Row>
    );
  }
}

function mapStateToProps ({ comments }) {
  return { comments };
}

function mapDispatchToProps (dispatch) {
  return {

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);