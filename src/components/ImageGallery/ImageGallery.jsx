import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <li key={image.id} className={s.image}>
          <img
            onClick={() => openModal(image.src.landscape)}
            src={image.src.large}
            alt={image.alt}
          />
        </li>
      ))}
    </ul>
  );
};
