import React from 'react';
import '../../global.scss';

import Hero from './components/Hero';
import Event from './components/Event';

function Index(props) {
  const { dataUser } = props;
  return (
    <>
      <div id='content' className='text-center'>
        <div className='row p-0 m-0 justify-content-center'>
          <div className='col-lg-6 p-0 m-0'>
            <Hero data={dataUser} />
            <Event data={dataUser} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
