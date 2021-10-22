import React, { useState, useEffect } from 'react';
import Opener from './EthnicGold/Opener/Index';
import Content from './EthnicGold/Content/Index';
import { useDispatch } from 'react-redux';
import { getChat, getUserData } from '../redux/global/action';

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (data) => {
    setIsOpen(data);
  };

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
      {isOpen === false ? <Opener parentCallback={handleOpen} /> : <Content />}
    </>
  );
}

export default Index;
