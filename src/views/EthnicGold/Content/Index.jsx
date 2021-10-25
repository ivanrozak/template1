import React from 'react';
import '../../global.scss';

import Hero from './components/Hero';
import Event from './components/Event';

function Index(props) {
  const { dataUser } = props;
  return (
    <>
      <div id='content' className='text-center'>
        <Hero data={dataUser} />
        <Event data={dataUser} />
      </div>
    </>
  );
}

export default Index;
