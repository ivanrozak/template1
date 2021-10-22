import React from 'react';
// import { Button, Label, Input, Alert } from 'reactstrap';

function Comments(props) {
  const { dataChat } = props;
  return (
    <div style={{ color: 'black' }}>
      <h1>Comment</h1>
      {JSON.stringify(dataChat)}
    </div>
  );
}

export default Comments;
