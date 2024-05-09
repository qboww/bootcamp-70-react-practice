import { Container, Heading, Loader, Section } from 'components/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryById } from 'service/countriesAPI';

export const CountrieInfo = () => {
  const [country, setCountry] = useState(null);

  const { countryId } = useParams();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
        setLoading(true)
        try{
            const data = await getCountryById(countryId);
            setCountry(data);
        } catch(err) {
            setError(err.message)
        }finally {
            setLoading(false)
        }
    };
    getData();
  }, [countryId]);

  return (
    <>
      <Section>
        <Container>
        {loading && <Loader />}
        {error && <Heading error title={error} />}
          {country && (
            <div>
              <img src={country.flag} alt={country.country} />
              <h3>Capital: {country.capital}</h3>
              <h1>{country.country === 'Russian Federation' ? 'MORDOR' : country.country}</h1>
              <p>Population: {country.population}</p>
              <p>Language: {country.languages.join(', ')}</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};
