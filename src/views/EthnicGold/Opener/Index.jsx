import React from 'react';
import '../../global.scss';
import moment from 'moment';

function Index(props) {
  const { dataUser } = props;
  const onOpen = () => {
    props.parentCallback(true);
  };
  return (
    <>
      <section
        id='opener'
        className='d-flex flex-column justify-content-between py-5'
      >
        <div className='text-center'>
          <h5>Dear, Arief Muhammad</h5>
          <p>You're invited to</p>
        </div>
        <div className='text-center'>
          <p className='bold'>THE WEDDING OF</p>
          <h1>
            {dataUser.inisial_wanita} & {dataUser.inisial_pria}
          </h1>
          <p>
            <strong>
              {moment(dataUser.tanggal_resepsi).format('dddd, Do MMMM  YYYY')}
            </strong>{' '}
          </p>
          <button onClick={onOpen} className='btn btn-base mt-3'>
            Open Invitation
          </button>
        </div>
      </section>
    </>
  );
}

export default Index;
