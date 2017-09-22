import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Panel, Badge, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { postsActions } from '../actions';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post, upVotePost, downVotePost } = this.props;
    return (
      <Row>
        <Panel header={post.title} bsStyle="primary">
          <div>
            {post.body}
          </div>
          <hr/>

          <div>
            <LinkContainer to={`/post/${post.id}`}>
              <Button bsStyle="primary">View detail</Button>
            </LinkContainer>
            <Badge pullRight={true}>{post.voteScore}</Badge>
            <ButtonGroup style={{float: 'right', marginRight: '10px'}}>
              <Button bsSize="xsmall" onClick={() => upVotePost(post.id)}>
                <Glyphicon glyph="thumbs-up" />
              </Button>
              <Button bsSize="xsmall" onClick={() => downVotePost(post.id)}>
                <Glyphicon glyph="thumbs-down" />
              </Button>
            </ButtonGroup>
          </div>

        </Panel>
      </Row>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    upVotePost: (id) => dispatch(postsActions.upVotePost(id)),
    downVotePost: (id) => dispatch(postsActions.downVotePost(id))
  }
}


export default connect(
  null,
  mapDispatchToProps
)(Post);