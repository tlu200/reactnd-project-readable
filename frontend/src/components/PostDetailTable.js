import React from 'react';
import { Table } from 'react-bootstrap';

const keys = ['id', 'timestamp', 'title', 'body', 'author', 'category', 'voteScore'];

function PostListTable(props) {
  const { post } = props;

  return (
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
    </Table>
  );
}

export default PostListTable;