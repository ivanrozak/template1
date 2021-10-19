import axios from 'axios';
import { GET_CLIENT_DATA, GET_CHAT_DATA } from './types';
import { Url } from '../../global_variable/global';

export const dataClient = (params) => ({
  type: GET_CLIENT_DATA,
  payload: params,
});
export const dataChat = (params) => ({
  type: GET_CHAT_DATA,
  payload: params,
});

export const getChat = (data) => async (dispatch) => {
  await axios.get(`${Url}/chat/${data}`).then((res) => {
    const dataBaru = res.data.data;
    console.log(dataBaru, 'from chat');
    dispatch(dataChat({ params: { name: 'resultChat', val: dataBaru } }));
    dispatch(dataChat({ params: { name: 'isLoadingChat', val: false } }));
  });
};
export const getUserData = (data) => async (dispatch) => {
  await axios.get(`${Url}/user/${data}`).then((res) => {
    const dataBaru = res.data.data;
    console.log(dataBaru, 'from user');
    dispatch(dataClient({ params: { name: 'resultClient', val: dataBaru } }));
    dispatch(dataClient({ params: { name: 'isLoadingClient', val: false } }));
  });
};
