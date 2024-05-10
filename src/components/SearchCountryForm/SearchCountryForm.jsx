import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchCountryForm.module.css';
import { FaSearch } from 'react-icons/fa';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchCountryForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');
  const handleChange = event => {
    setRegion(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!region) {
      toast.error('Select any region');
      return;
    }
    onSubmit(region);
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <button className={s.button} type="submit">
        <FaSearch />
      </button>
      <select
        className={s.select}
        aria-label="select"
        defaultValue="default"
        onChange={handleChange}
      >
        <option disabled value="default">
          Select region
        </option>
        {regions.map(region => {
          return (
            <option value={region.value} key={region.id}>
              {region.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
