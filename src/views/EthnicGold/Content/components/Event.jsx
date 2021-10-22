import React from 'react';
import moment from 'moment';
import Countdown from './child/Countdown';
import Galleries from './child/Galleries';
import Music from './child/Music';
import Comments from './child/Comments';

function Event(props) {
  const { data, dataChat } = props;

  return (
    <>
      <section id='event'>
        <div className='py-3 text-center bg-color'>
          <article data-aos='fade-up' data-aos-delay='200'>
            <h1>
              We are
              <br />
              Married
            </h1>

            <p className='mt-2'>
              “Dan diantara tanda-tanda kebesaran-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. “<br />
              <br />
              Ar-Rum ayat 21
            </p>
          </article>
          <article
            className='row justify-content-center'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='text-center'>
              <img
                className='round-img'
                src='https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM'
                alt=''
              />
              <h2>{data.nama_wanita}</h2>
              <p>
                Putri dari Bapak {data.ayah_wanita} <br /> dan Ibu{' '}
                {data.ibu_wanita}
              </p>
              <img
                className='round-img'
                src='https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM'
                alt=''
              />
              <h2>{data.nama_pria}</h2>
              <p>
                Putra dari Bapak {data.ayah_pria} <br /> dan Ibu {data.ibu_pria}
              </p>
            </div>
          </article>
          <article>
            <div>
              <h1>Akad Nikah</h1>
              <div className='mt-3 bold' style={{ letterSpacing: '0.105em' }}>
                {moment(data.tanggal_akad).format('MMMM').toUpperCase()}
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                  <div className='lines'></div>
                  <div
                    className='py-2 bold'
                    style={{ letterSpacing: '0.105em' }}
                  >
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
        </div>
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
