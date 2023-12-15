// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode:string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode"
const KEY = 'bdc_9fe7a8d9d2874b2c92d8f0a95e4837fa'

function Form() {
  const [lat, lng] = useUrlPosition()
  const {createCity, isLoading} = useCities()
  const navigate = useNavigate()

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("")
  const [geocodingError, setGeocodingError] = useState("")

  const [isLoadingGeocoding, setLoadingGeocoding] = useState(false)

  useEffect(()=>{
    if (!lat && !lng) return;

    const fetchCityDate = async ()=>{
      try{
        setLoadingGeocoding(true)
        setGeocodingError("")
        const res = await fetch(`${BASE_URL}?key=${KEY}&latitude=${lat}&longitude=${lng}`)
        const data = await res.json()
        console.log(data)

        if (!data.countryCode) throw new Error ('not found country')

        setCityName(data.city || data.locality || "")
        setCountry(data.countryName)
        setEmoji(convertToEmoji(data.countryCode))
      }catch(err:any){
        setGeocodingError(err.message)
      }finally{
        setLoadingGeocoding(false)
      }
    }
    fetchCityDate()
  }, [lat,lng])

  const handleSubmit = async (e:Event) => {
    e.preventDefault();

    if(!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      emoji,
      notes,
      position: { lat, lng }
    }
    await createCity(newCity)
    navigate('/app/cities')
  }

  if(isLoadingGeocoding) return <Spinner></Spinner>

  if (!lat && !lng) return <Message message="click anywhere"/>

  if (geocodingError) return <Message message={geocodingError}/>

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`} onSubmit={(e)=>handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
          <DatePicker id="date" onChange={(date:string) => setDate(date)} selected={date} dateFormat='dd/MM/yyyy'/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton></BackButton>
      </div>
    </form>
  );
}

export default Form;
