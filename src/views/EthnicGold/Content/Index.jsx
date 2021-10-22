import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';

import Hero from './components/Hero';
import Event from './components/Event';

function Index() {
  const dataUser = useSelector(
    (state) => state.global.dataState.resultClient[0]
  );
  const isLoading = useSelector(
    (state) => state.global.dataState.isLoadingClient
  );
  const isLoadChat = useSelector(
    (state) => state.global.dataState.isLoadingChat
  );
  const dataChat = useSelector((state) => state.global.dataState.resultChat);
  return (
    <>
      {!isLoading ? <Hero data={dataUser} /> : null}
      {!isLoading && !isLoadChat ? (
        <Event data={dataUser} dataChat={dataChat} />
      ) : null}
    </>
  );
}

export default Index;
