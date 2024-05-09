import axios from 'axios';
import { transformCountriesData } from 'helpers/transformCountriesData';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});
export const getCountries = async () => {
  const { data } = await instance.get('/region/europe');
  return transformCountriesData(data);
};
