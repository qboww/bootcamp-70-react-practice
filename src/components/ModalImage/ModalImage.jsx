import { BackDrop } from 'components';
import { useEffect } from 'react';
import s from './ModalImage.module.css';

export const ModalImage = ({ largeImage, closeModal }) => {
  useEffect(() => {
    const heandleKeyPres = event => {
      if (event.code === 'Escape') {
        closeModal('');
      }
    };
    window.addEventListener('keydown', heandleKeyPres);
    return () => window.removeEventListener('keydown', heandleKeyPres);
  }, [closeModal]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      closeModal('');
    }
  };

  return (
    <BackDrop onClick={handleClick}>
      <img width={'70%'} src={largeImage} alt="modal_img" />
      <button
        className={s.close_btn}
        onClick={() => {
          closeModal('');
        }}
      >
        X
      </button>
    </BackDrop>
  );
};
