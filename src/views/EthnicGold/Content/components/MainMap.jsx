import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Map from './child/Map';

function MainMap() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button outline color='secondary' onClick={toggle}>
      X
    </Button>
  );
  return (
    <div>
      <Button onClick={toggle}>Lihat Lokasi</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Lokasi Acara
        </ModalHeader>
        <ModalBody>
          <Map />
        </ModalBody>
        <ModalFooter className='justify-content-center'>
          <Button color='secondary' style={{ color: 'white' }} onClick={toggle}>
            Menuju Lokasi Akad
          </Button>
          <br />
          <a href='https://goo.gl/maps/omFhPoeBtc5Fj6H6A'>
            <Button
              color='secondary'
              style={{ color: 'white' }}
              onClick={toggle}
            >
              Menuju Lokasi Resepsi
            </Button>
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MainMap;
