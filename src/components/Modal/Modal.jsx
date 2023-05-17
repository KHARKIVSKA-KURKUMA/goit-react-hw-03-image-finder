import React from 'react';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export default function Modal() {
  return (
    <Overlay>
      <ModalWindow>
        <Image
          src="https://images.cars.com/in/v2/stock_photos/7f212472-c429-4681-882b-29e52f4d52b5/884b28bd-d67f-4c90-a7e5-a066090db8f7.png?w=1000"
          alt=""
        />
      </ModalWindow>
    </Overlay>
  );
}
