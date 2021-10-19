import React from 'react';
import './index.scss';

function Index(props) {
  const onOpen = () => {
    props.parentCallback(true);
  };
  return (
    <>
      <section id='hero' className='d-flex'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-4' data-aos='fade-up' data-aos-delay='200'>
              <div className='d-flex justify-content-center mb-2'>
                <div className='logo-bordered'>
                  <img src='assets/img/logo_only.svg' alt='' />
                </div>
              </div>
              <h2>Arief Muhammad</h2>
              <p>You're invited to</p>
              <div className='d-flex justify-content-center'>
                <div className='slide'>
                  <img
                    src='assets/img/themes/elegant-white/onel-_-ervi-t-04901-rkk0YvpK_.jpg'
                    alt=''
                  />
                </div>
              </div>
              <p className='mt-3 mb-1'>The Wedding Of</p>
              <h1 className='mb-1'>Marsha & Yuan</h1>
              <p>
                <strong>02 JANUARI 2022</strong>{' '}
              </p>
              <div onClick={onOpen} className='btn-base'>
                Buka undangan
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
