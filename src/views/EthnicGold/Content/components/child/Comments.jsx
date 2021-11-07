import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, Input, Alert, Badge, Spinner } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { getChat } from '../../../../../redux/global/action';
import { userId, urlDev } from '../../../../../global_variable/global';

function Comments() {
  const dispatch = useDispatch();
  const dataChat = useSelector((state) => state.global.dataState.resultChat);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rsvp, setRsvp] = useState(null);
  let data = {
    user_id: userId,
    user_name: name,
    chat_content: comment,
    rsvp: rsvp,
  };
  function resetForm() {
    setName('');
    setComment('');
    setRsvp(null);
  }
  function postChat(data) {
    if (name === '' && comment === '') {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    } else {
      setLoaded(true);
      axios
        .post(`${urlDev}/chat`, data)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            setLoaded(false);
            dispatch(getChat(userId));
            dispatch(getChat(userId));
          }
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          setLoaded(false);
        });
    }
  }
  useEffect(() => {
    const getChatData = () => {
      dispatch(getChat(userId));
    };
    getChatData();
  }, [dispatch]);
  return (
    <div className='p-3 front-layer'>
      <h3 className='mb-1'>Ucapan dan Do'a</h3>
      <div className='lines mn-5'>----</div>
      <p>Kirimkan pesan singkat nan berkesan untuk kami</p>

      <div className='text-left'>
        <Label>Nama*</Label>
        <Input
          placeholder='Tuliskan Nama'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label className='mt-1'>Pesan*</Label>
        <Input
          placeholder='Tuliskan Pesan'
          type='textarea'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Label className='mt-1'>Konfirmasi Kehadiran</Label>
        <br />
        <Label>
          <Input
            type='radio'
            name='radio1'
            value='1'
            onChange={(e) => setRsvp(e.target.value)}
          />{' '}
          Hadir{' '}
          <Input
            type='radio'
            name='radio1'
            value='2'
            onChange={(e) => setRsvp(e.target.value)}
          />{' '}
          Tidak
        </Label>
        <Alert color='danger' isOpen={visible}>
          <p>Mohon isi nama dan pesan dahulu!</p>
        </Alert>
        <button className='btn btn-second w-100' onClick={() => postChat(data)}>
          Kirim Pesan{' '}
          {loaded ? (
            <Spinner type='grow' style={{ width: '15px', height: '15px' }}>
              .
            </Spinner>
          ) : null}
        </button>
      </div>
      <hr />

      <div className='chat-content'>
        {dataChat.map((item, index) => (
          <div className='text-left' key={index}>
            <div>
              <small className='float-end'>
                {moment(item.created_at).subtract(10, 'days').calendar()}
              </small>
            </div>
            <h5 className='bold'>
              {item.user_name}{' '}
              {item.rsvp === 1 ? <Badge color='secondary'>Hadir</Badge> : null}{' '}
              {item.rsvp === 2 ? (
                <Badge color='secondary'>Tidak Hadir</Badge>
              ) : null}
            </h5>
            <p className='mn-1 mb-2'>{item.chat_content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
