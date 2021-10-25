import React from 'react';
import moment from 'moment';
import Countdown from './child/Countdown';
import Galleries from './child/Galleries';
import Music from './child/Music';
import Comments from './child/Comments';
import { AiOutlineInstagram } from 'react-icons/ai';
import Rings from '../../assets/wedding-ring.png';
import Rose from '../../assets/rose.png';

function Event(props) {
  const { data, dataChat } = props;

  return (
    <>
      <section id='event' className='pt-5 pb-4'>
        <div className='couple'>
          <h3 className='mb-1'>Brides and Groom</h3>
          <div className='lines mn-5 mb-4'>----</div>
          <div className='row'>
            <div className='col-lg-6 pb-4'>
              <img
                className='rounded-circle'
                src='assets/img/themes/elegant-white/q.jpg'
                alt=''
              />
              <h1 className='mb-1'>{data.inisial_wanita}</h1>
              <div className='lines mn-5 mb-3'>----</div>
              <h2>{data.nama_wanita}</h2>
              <p>
                Putri dari Bapak {data.ayah_wanita} <br /> dan Ibu{' '}
                {data.ibu_wanita}
              </p>
              <button className='btn btn-rounded p-2'>
                <AiOutlineInstagram size='24px' />
              </button>
            </div>
            <div className='col-lg-6'>
              <img
                className='rounded-circle'
                src='assets/img/themes/elegant-white/w.jpg'
                alt=''
              />
              <h1 className='mb-1'>{data.inisial_pria}</h1>
              <div className='lines mn-5 mb-3'>----</div>
              <h2>{data.nama_pria}</h2>
              <p>
                Putra dari Bapak {data.ayah_pria} <br /> dan Ibu {data.ibu_pria}
              </p>
              <button className='btn btn-rounded p-2'>
                <AiOutlineInstagram size='24px' />
              </button>
            </div>
          </div>
        </div>
        <div className='ceremony'>
          <div className='front-layer py-5'>
            <h3 className='mb-1'>Our Ceremony</h3>
            <div className='lines mn-5 mb-1'>----</div>
            <p>
              Dengan memohon Rahmat Allah, merupakan kehormatan dan kebahagiaan
              kami apabila Bapak/Ibu/Saudara/i dapat memberikan do'a dan restu
              dalam acara pernikahan kami yang akan dilaksanakan pada :
            </p>
            <h2 className='mt-3 bold'>
              {moment(data.tanggal_akad).format('dddd,')}
            </h2>
            <h2 className='bold'>
              {moment(data.tanggal_akad).format('Do MMMM YYYY')}
            </h2>
            <div className='row'>
              <div className='col-lg-6'>
                <img
                  className='my-3'
                  src={Rings}
                  alt=''
                  style={{ width: '75px' }}
                />
                <h3>Akad Nikah</h3>
                <div className='pb-2 bold'>
                  {moment(data.waktu_start_akad).format('LT')} -{' '}
                  {moment(data.waktu_end_akad).format('LT')} WIB
                </div>
                <p>{data.venue_akad}</p>
                <p className='bold'>
                  {data.alamat_akad}
                  <br />
                  {data.kota_akad}
                </p>
              </div>
              <div className='col-lg-6'>
                <img
                  className='my-3'
                  src={Rose}
                  alt=''
                  style={{ width: '75px' }}
                />
                <h3>Resepsi</h3>
                <div className='pb-2 bold'>
                  {moment(data.waktu_start_resepsi).format('LT')} -{' '}
                  {moment(data.waktu_end_resepsi).format('LT')} WIB
                </div>
                <p>{data.venue_resepsi}</p>
                <p className='bold'>
                  {data.alamat_resepsi}
                  <br />
                  {data.kota_resepsi}
                </p>
              </div>
            </div>
            <button className='btn btn-secondary mt-4'>Lihat Lokasi</button>
          </div>
        </div>
        <div className='ceremony mt-4 text-center'>
          <div className='front-layer'>
            <h3>Save The Date</h3>
            <Countdown date={data.tanggal_resepsi} />
          </div>
        </div>
      </section>
      <section>
        <h3 className='mt-3'>Couple Galleries</h3>
        <div className='lines mn-5 mb-4'>----</div>
        <Galleries />
      </section>
      <section>
        <Music />
        <Comments dataChat={dataChat} />
      </section>
    </>
  );
}

export default Event;
