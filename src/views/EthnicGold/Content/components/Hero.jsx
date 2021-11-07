import React from 'react';
import Slider from 'react-slick';

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
      <section id='main' className='text-center'>
        <div className='row justify-content-center p-0'>
          <div className='slide-img' data-aos='fade' data-aos-delay='150'>
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
        </div>
        <div data-aos='fade-up' data-aos-delay='150'>
          <p className='bold mt-3'>THE WEDDING</p>
          <h1 className='mn-4'>
            {data.inisial_wanita} & {data.inisial_pria}
          </h1>
          <div className='lines mb-4 mn-4'>-----</div>
          <p className='mt-2 px-2'>
            “Dan diantara tanda-tanda kebesaran-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. “<br />
            <br />
            (Ar-Rum: 21)
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
