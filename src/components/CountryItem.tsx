import styles from "./CountryItem.module.css";

type countryType = {
  country:{
    country: string,
    emoji: string,
  }
}

function CountryItem({ country }:countryType) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
