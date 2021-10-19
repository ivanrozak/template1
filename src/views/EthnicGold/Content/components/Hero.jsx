import React from 'react';
import Slider from 'react-slick';
import moment from 'moment';

function Hero(props) {
  const { data } = props;
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <>
      <div id='main' className='text-center'>
        <div className='hero'>
          <div className='bg-img' data-aos='fade' data-aos-delay='150'>
            <div className='layer'></div>
            <Slider {...settings}>
              <div>
                <img src='assets/img/themes/elegant-white/1.jpg' alt='' />
              </div>
              <div>
                <img src='assets/img/themes/elegant-white/3.jpg' alt='' />
              </div>
              <div>
                <img src='assets/img/themes/elegant-white/4.jpg' alt='' />
              </div>
              <div>
                <img src='assets/img/themes/elegant-white/5.jpg' alt='' />
              </div>
            </Slider>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='title' data-aos='fade-up' data-aos-delay='200'>
              <div className='d-flex justify-content-center mb-4'>
                <div className='logo-bordered'>
                  <img src='assets/img/logo_only.svg' alt='' />
                </div>
              </div>
              <div className=''>
                <div>The Wedding Of</div>
                <div className='f32 oleo' style={{ marginTop: '-8px' }}>
                  {data.inisial_wanita} & {data.inisial_pria}
                </div>
                <div className='semibold' style={{ marginTop: '-6px' }}>
                  {moment(data.tanggal_resepsi).format('dddd, Do MMMM  YYYY')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
