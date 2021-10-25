import React from 'react';
// import { Button, Label, Input, Alert } from 'reactstrap';

function Comments(props) {
  const { dataChat } = props;
  return (
    <div className='p-3' style={{ color: 'black', border: '2px solid black' }}>
      <h1>Comment</h1>
      {JSON.stringify(dataChat)}
      <hr />
      <h5 className='bold'>Nama yg comment</h5>
      <p>ini isi commentnya loh</p>
    </div>
  );
}

export default Comments;
