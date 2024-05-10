import { Link, useLocation } from 'react-router-dom/dist';
import s from './CountriesList.module.css';
export const CountriesList = ({ countries }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {countries.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/countries/${item.id}`} state={location}>
              <img src={item.flag} alt={item.country} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
