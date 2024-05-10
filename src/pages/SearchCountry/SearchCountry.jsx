import { Container, CountriesList, Heading, Loader, SearchCountryForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCountryByRegion } from 'service/countriesAPI';

const SearchCountry = () => {
  const [searchParams, setSearchPArams] = useSearchParams();
  const [countries, setCoutries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getCountryByRegion(region);
        setCoutries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchParams]);
  const handleSubmit = region => {
    setSearchPArams({ region });
    setError(false);
  };
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <SearchCountryForm onSubmit={handleSubmit} />
        {error && <Heading error title={error} />}
        {countries.length > 0 && <CountriesList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
