import { SearchForm, ImageGallery } from 'components';
import { useEffect, useState } from 'react';
import { getImages } from 'service/imagesAPI';
import { Heading } from '../../components';

export const Images = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query) return;
    getImages(query, page).then(({ photos }) => {
      if (photos.length === 0) {
        setIsEmpty(true);
        return;
      }
      setImages(photos);
    });
  }, [query, page]);

  const onSubmit = ({ text }) => {
    setQuery(text);
    setIsEmpty(false);
  };
  console.log(query);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isEmpty && <Heading title={'Nothing in search'} info top />}
    </>
  );
};
