import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';
import './galleries.scss';

// // import styles
// import 'lightgallery/css/lightgallery.css';
import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/css/lightgallery-bundle.css';
import 'lightgallery/scss/lightgallery-bundle.scss';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgPager from 'lightgallery/plugins/pager';

function Galleries() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  const [load, setLoad] = useState(false);
  const handleClick = () => {
    setLoad(!load);
  };
  const mobile = { controls: true, showCloseIcon: true, download: true };
  return (
    <>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, lgPager, lgFullscreen]}
        // elementClassNames='custom-wrapper-class'
        mode='lg-fade'
        // className='m-5'
        mobileSettings={mobile}
      >
        {' '}
        {load ? (
          <div style={{ position: 'fixed', top: 0, zIndex: 9000 }}>x</div>
        ) : null}
        <a className='img-a' href='assets/img/themes/elegant-white/1.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/1.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/3.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/3.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/4.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/4.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/5.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/5.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/6.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/6.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/7.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/7.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/8.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/8.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/9.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/9.jpg'
            alt=''
          />
        </a>
        <a className='img-a' href='assets/img/themes/elegant-white/10.jpg'>
          <img
            className='img-grid'
            src='assets/img/themes/elegant-white/10.jpg'
            alt=''
          />
        </a>
      </LightGallery>
    </>
  );
}

export default Galleries;
