import { SearchForm } from 'components';
import { useEffect, useState } from 'react';
import { getImages } from 'service/imagesAPI';

export const Images = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    getImages(query, page);
  }, [query, page]);

  const onSubmit = ({ text }) => {
    setQuery(text);
  };
  console.log(query);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
    </>
  );
};
