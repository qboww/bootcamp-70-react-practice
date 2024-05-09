import { SearchForm, ImageGallery, Loader, Heading, LoadMoreBtn, ModalImage } from 'components';
import { useEffect, useState } from 'react';
import { getImages } from 'service/imagesAPI';

export const Images = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    getImages(query, page)
      .then(({ photos, total_results, per_page }) => {
        if (photos.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prev => [...prev, ...photos]);
        setShowBtn(page < Math.ceil(total_results / per_page));
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const openModal = largeImage => {
    setLargeImage(largeImage);
  };

  const onSubmit = ({ text }) => {
    setQuery(text);
    setIsEmpty(false);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} icon="search" />
      {images.length > 0 && <ImageGallery openModal={openModal} images={images} />}
      {isEmpty && <Heading title={'Nothing in search'} info top />}
      {error && <Heading title={'Something went wrong... Try again later.'} error top />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      {largeImage && <ModalImage largeImage={largeImage} closeModal={openModal} />}
    </>
  );
};
