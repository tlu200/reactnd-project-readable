import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Table } from 'react-bootstrap';

const keys = ['id', 'timestamp', 'title', 'body', 'author', 'category', 'voteScore'];

function PostDetail (props) {
  const post = props.posts.find((post) => {
    return post.id === props.match.params.postId;
  });

  return (
    <Grid>
      <Row>
        {
          post ?
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>value</th>
              </tr>
              </thead>
              <tbody>
              {keys.map((key) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{key === 'timestamp'? new Date(post[key]).toISOString(): post[key]}</td>
                  </tr>
                );
              })}
              </tbody>
            </Table> : <div>No post found</div>
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
