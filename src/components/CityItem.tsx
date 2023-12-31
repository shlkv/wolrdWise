import { Link } from "react-router-dom";
import styles from "./CityItem.module.css"
import { useCities } from "../contexts/CitiesContext";
import React from "react";


const formatDate = (date:string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

type CityItemType = {
  currentCity:{
    id:string,
  }
  deleteCity: Function,
  city:{
    cityName: string,
    emoji: string,
    date: string,
    id: string,
    position: {
      lng:string,
      lat:string
      }
    },
}

export default function CityItem({ city }:CityItemType): React.JSX.Element {
  const { cityName, emoji, date, id, position } = city
  const {currentCity, deleteCity}:CityItemType = useCities()

  const handleClick = (e:Event) => {
    e.preventDefault()
    deleteCity(id)
  }


  return (
    <li className={styles.cityListItem}>
      <Link
        className={`${styles.cityItem} ${ id === currentCity.id ? styles['cityItem--active'] : ''}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={()=>handleClick}>&times;</button>
      </Link>
    </li>
  )
}
