import React, { useState, useEffect } from 'react';
import Opener from './EthnicGold/Opener/Index';
import Content from './EthnicGold/Content/Index';
import { useDispatch, useSelector } from 'react-redux';
import { getChat, getUserData } from '../redux/global/action';

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (data) => {
    setIsOpen(data);
  };
  const dataUser = useSelector(
    (state) => state.global.dataState.resultClient[0]
  );
  const isLoading = useSelector(
    (state) => state.global.dataState.isLoadingClient
  );
  const dispatch = useDispatch();
  useEffect(() => {
    function getApi() {
      dispatch(getChat(1));
      dispatch(getUserData(1));
    }
    return getApi();
  }, [dispatch]);
  return (
    <>
      {!isLoading ? (
        <>
          {isOpen === false ? (
            <Opener parentCallback={handleOpen} dataUser={dataUser} />
          ) : (
            <Content dataUser={dataUser} />
          )}
        </>
      ) : (
        <div
          style={{ height: '100vh', width: '100%' }}
          className='d-flex justify-content-center align-items-center'
        >
          Loading...
        </div>
      )}
    </>
  );
}

export default Index;
