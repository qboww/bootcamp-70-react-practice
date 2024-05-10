import { Container, CountriesList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countriesAPI';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading error title={error} />}
        <CountriesList countries={countries} />
      </Container>
    </Section>
  );
};

export default Countries;
