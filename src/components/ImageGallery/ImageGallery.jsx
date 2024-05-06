import s from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <li key={image.id} className={s.image}>
          <img src={image.src.large} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};
