import CityItem from './CityItem';
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext';


type CityListType = {
  cities:[],
  isLoading:boolean
}
export default function CityList() {
  const {cities, isLoading}:CityListType = useCities()

  if(isLoading) return <Spinner/>;
  if(!cities.length) return <Message message={"Add your first city"}/>;

  return (
    <ul className={styles.cityList}>
        {cities.map(city => <CityItem city={city} key={city.id}/>)}
    </ul>
  )
}
