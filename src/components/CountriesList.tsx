
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem'
import { useCities } from '../contexts/CitiesContext'

type CountryListType= {
    cities:{
        country: string,
        emoji: string,
    }[],
    isLoading:boolean
}


export default function CountryList() {
    const {cities, isLoading}:CountryListType = useCities()

    if(isLoading) return <Spinner/>;
    if(!cities.length) return <Message message={"Add your first city"}/>;

    const countries:[] = cities.reduce((arr, city) =>{
        if (!arr.map((el)=> el.country).includes(city.country))
            return [...arr, {country: city.country, emoji: city.emoji}];
        else return arr;
    }, []);

    return (
        <ul className={styles.cityList}>
            {countries.map(country => <CountryItem country={country} key={Math.random()}/>)}
        </ul>
    )
}
