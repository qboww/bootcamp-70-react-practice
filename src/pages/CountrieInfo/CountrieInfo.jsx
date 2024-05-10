import { Container, Heading, Loader, Section } from 'components/index';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCountryById } from 'service/countriesAPI';
const CountrieInfo = () => {
  const [country, setCountry] = useState(null);
  const location = useLocation();
  const goBack = useRef(location.state ?? '/countries');

  const { countryId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getCountryById(countryId);
        setCountry(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [countryId]);

  return (
    <>
      <Section>
        <Container>
          <Link to={goBack.current}>Go Back </Link>
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
export default CountrieInfo;
