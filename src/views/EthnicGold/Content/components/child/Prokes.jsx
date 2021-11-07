import React from 'react';

function Prokes() {
  return (
    <div className='main'>
      <div className='p-3'>
        <h3 className='mb-1'>Protokol Kesehatan</h3>
        <div className='lines mn-5'>----</div>
        <p>
          Tanpa mengurangi rasa hormat, sesuai dengan peraturan pemerintah, para
          tamu undangan tetap wajib menjalankan protokol kesehatan sebagaimana
          mestinya. Pastikan kondisi badan dalam keadaan sehat saat menghadiri
          undangan. Terima kasih atas kerjasama Bapak/Ibu/Saudara/i.
        </p>
      </div>
      <hr />
      <div className='prokes-content row px-2'>
        <div className='col-6 col-lg-3 mb-4'>
          <div className='img-container'>
            <img src='assets/img/prokes1.png' alt='' />
          </div>
          <p className='bold'>Memakai Masker</p>
          <p>Wajib memakai masker selama acara berlangsung</p>
        </div>
        <div className='col-6 col-lg-3 mb-4'>
          <div className='img-container'>
            <img src='assets/img/prokes2.png' alt='' />
          </div>
          <p className='bold'>Menjaga Jarak</p>
          <p>Wajib menjaga jarak ketika menghadiri acara</p>
        </div>
        <div className='col-6 col-lg-3 mb-4'>
          <div className='img-container'>
            <img src='assets/img/prokes3.png' alt='' />
          </div>
          <p className='bold'>Mencuci Tangan</p>
          <p>Mencuci tangan dengan sabun / Hand Sanitizer</p>
        </div>
        <div className='col-6 col-lg-3 mb-4'>
          <div className='img-container'>
            <img src='assets/img/prokes4.png' alt='' />
          </div>
          <p className='bold'>Jangan Menyentuh Wajah</p>
          <p>Usahakan tidak menyentuh wajah sebelum cuci tangan</p>
        </div>
      </div>
    </div>
  );
}

export default Prokes;
