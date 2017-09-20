import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';

function PostDetail (props) {
  const post = props.posts.find((post) => {
    return post.id === props.match.params.postId;
  });

  return (
    <Grid>
      <Row>
        {
          post ? <div>{JSON.stringify(post)}</div> : <div>No post found</div>
        }
      </Row>
    </Grid>
  );
}

function mapStateToProps ({ posts }) {
  return { posts };
}


export default connect(
  mapStateToProps
)(PostDetail);
