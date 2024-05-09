import s from './CountriesList.module.css';
export const CountriesList = ({ countries }) => {
  return (
    <ul className={s.list}>
      {countries.map(item => {
        return (
          <li key={item.id}>
            <img src={item.flag} alt={item.country} />
          </li>
        );
      })}
    </ul>
  );
};
