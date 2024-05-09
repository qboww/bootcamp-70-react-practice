export const transformCountriesData = data => {
  return data.map(({ name: { common }, capital, flags: { png }, population, languages }) => {
    return {
      id: common,
      country: common,
      flag: png,
      population,
      languages: Object.values(languages),
      capital: capital[0],
    };
  });
};
