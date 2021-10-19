import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';

import Hero from './components/Hero';
import Event from './components/Event';

function Index() {
  const dataUser = useSelector(
    (state) => state.global.dataState.resultClient[0]
  );
  const dataChat = useSelector((state) => state.global.dataState.resultChat);
  return (
    <>
      <Hero data={dataUser} />
      <Event data={dataUser} dataChat={dataChat} />
    </>
  );
}

export default Index;
