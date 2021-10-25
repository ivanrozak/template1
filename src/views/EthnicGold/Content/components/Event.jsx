import React from 'react';
import moment from 'moment';
import Countdown from './child/Countdown';
import Galleries from './child/Galleries';
import Music from './child/Music';
import Comments from './child/Comments';
import { AiOutlineInstagram } from 'react-icons/ai';

function Event(props) {
  const { data, dataChat } = props;

  return (
    <>
      <section id='event'>
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
        <div className='text-center'></div>

        <article>
          <div>
            <h1>Akad Nikah</h1>
            <div className='mt-3 bold' style={{ letterSpacing: '0.105em' }}>
              {moment(data.tanggal_akad).format('MMMM').toUpperCase()}
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-center'>
                <div className='lines'></div>
                <div className='py-2 bold' style={{ letterSpacing: '0.105em' }}>
                  {moment(data.tanggal_akad).format('dddd').toUpperCase()}
                </div>
                <div className='lines'></div>
              </div>
              <div className='px-3 f48 bold'>
                {moment(data.tanggal_akad).format('Do')}
              </div>
              <div className='text-center'>
                <div className='lines'></div>
                <div className='py-2 bold'>
                  {moment(data.waktu_start_akad).format('LT')} -{' '}
                  {moment(data.waktu_end_akad).format('LT')} WIB
                </div>
                <div className='lines'></div>
              </div>
            </div>
            <p className='bold'>{moment(data.tanggal_akad).format('YYYY')}</p>
            <p>{data.venue_akad}</p>
            <p className='bold'>
              {data.alamat_akad}
              <br />
              {data.kota_akad}
            </p>
          </div>

          <button className='btn btn-secondary my-4'>Lihat Lokasi</button>
        </article>

        <Music />
        <div className='bg-color mt-4 p-3 text-center'>
          <h1>Save The Date</h1>
          <Countdown date={data.tanggal_resepsi} />
        </div>
      </section>
      <section>
        <div>
          <Galleries />
        </div>
        <Comments dataChat={dataChat} />
      </section>
    </>
  );
}

export default Event;
