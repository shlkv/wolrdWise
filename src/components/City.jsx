"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const City_module_css_1 = __importDefault(require("./City.module.css"));
const CitiesContext_1 = require("../contexts/CitiesContext");
const Spinner_1 = __importDefault(require("./Spinner"));
const BackButton_1 = __importDefault(require("./BackButton"));
const formatDate = (date) => new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
}).format(new Date(date));
function City() {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const lat = searchParams.get("lat")
    // const lng = searchParams.get("lng")
    const { id } = (0, react_router_dom_1.useParams)();
    const { getCity, currentCity, isLoading } = (0, CitiesContext_1.useCities)();
    (0, react_1.useEffect)(() => {
        getCity(id);
    }, [id, getCity]);
    // TEMP DATA
    // type currentCityType = {
    //   cityName: string,
    //   emoji: string,
    //   date: string,
    //   notes: string,
    // };
    const { cityName, emoji, date, notes } = currentCity;
    if (isLoading)
        return <Spinner_1.default></Spinner_1.default>;
    return (<div className={City_module_css_1.default.city}>
      <div className={City_module_css_1.default.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={City_module_css_1.default.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (<div className={City_module_css_1.default.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>)}

      <div className={City_module_css_1.default.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`} target="_blank" rel="noreferrer">
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton_1.default></BackButton_1.default>
      </div>
    </div>);
}
exports.default = City;
