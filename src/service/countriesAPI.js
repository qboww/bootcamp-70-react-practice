import axios from 'axios';
import { transformCountriesData } from 'helpers/transformCountriesData';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});
export const getCountries = async () => {
  const { data } = await instance.get('/region/europe');
  return transformCountriesData(data);
};
export const getCountryById = async id => {
  const { data } = await instance.get(`/name/${id}`);
  return transformCountriesData(data)[0];
};

export const getCountryByRegion = async region => {
  const { data } = await instance.get(`/region/${region}`);
  return transformCountriesData(data);
};
