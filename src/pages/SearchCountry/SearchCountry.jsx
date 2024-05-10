import { Container, SearchCountryForm, Section } from 'components/index';

export const SearchCountry = () => {
  const handleSubmit = region => {
    console.log(region);
  };
  return (
    <Section>
      <Container>
        <SearchCountryForm onSubmit={handleSubmit} />
      </Container>
    </Section>
  );
};
