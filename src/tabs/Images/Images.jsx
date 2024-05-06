import { SearchForm, ImageGallery, Loader } from 'components';
import { useEffect, useState } from 'react';
import { getImages } from 'service/imagesAPI';
import { Heading } from '../../components';

export const Images = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      .finally(() => setIsLoading(false));
  }, [query, page]);

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
      <SearchForm onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isEmpty && <Heading title={'Nothing in search'} info top />}
      {showBtn && (
        <button onClick={handleLoadMore} type="button">
          Load More
        </button>
      )}
      {isLoading && <Loader />}
    </>
  );
};
