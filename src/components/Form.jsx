"use strict";
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToEmoji = void 0;
const react_1 = require("react");
const Form_module_css_1 = __importDefault(require("./Form.module.css"));
const Button_1 = __importDefault(require("./Button"));
const BackButton_1 = __importDefault(require("./BackButton"));
const useUrlPosition_1 = __importDefault(require("../hooks/useUrlPosition"));
const Message_1 = __importDefault(require("./Message"));
const Spinner_1 = __importDefault(require("./Spinner"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const CitiesContext_1 = require("../contexts/CitiesContext");
const react_router_dom_1 = require("react-router-dom");
function convertToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
exports.convertToEmoji = convertToEmoji;
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode";
const KEY = 'bdc_9fe7a8d9d2874b2c92d8f0a95e4837fa';
function Form() {
    const [lat, lng] = (0, useUrlPosition_1.default)();
    const { createCity, isLoading } = (0, CitiesContext_1.useCities)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [cityName, setCityName] = (0, react_1.useState)("");
    const [country, setCountry] = (0, react_1.useState)("");
    const [date, setDate] = (0, react_1.useState)(new Date());
    const [notes, setNotes] = (0, react_1.useState)("");
    const [emoji, setEmoji] = (0, react_1.useState)("");
    const [geocodingError, setGeocodingError] = (0, react_1.useState)("");
    const [isLoadingGeocoding, setLoadingGeocoding] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!lat && !lng)
            return;
        const fetchCityDate = () => __awaiter(this, void 0, void 0, function* () {
            try {
                setLoadingGeocoding(true);
                setGeocodingError("");
                const res = yield fetch(`${BASE_URL}?key=${KEY}&latitude=${lat}&longitude=${lng}`);
                const data = yield res.json();
                console.log(data);
                if (!data.countryCode)
                    throw new Error('not found country');
                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode));
            }
            catch (err) {
                setGeocodingError(err.message);
            }
            finally {
                setLoadingGeocoding(false);
            }
        });
        fetchCityDate();
    }, [lat, lng]);
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (!cityName || !date)
            return;
        const newCity = {
            cityName,
            country,
            date,
            emoji,
            notes,
            position: { lat, lng }
        };
        yield createCity(newCity);
        navigate('/app/cities');
    });
    if (isLoadingGeocoding)
        return <Spinner_1.default></Spinner_1.default>;
    if (!lat && !lng)
        return <Message_1.default message="click anywhere"/>;
    if (geocodingError)
        return <Message_1.default message={geocodingError}/>;
    return (<form className={`${Form_module_css_1.default.form} ${isLoading ? Form_module_css_1.default.loading : ""}`} onSubmit={(e) => handleSubmit}>
      <div className={Form_module_css_1.default.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName}/>
        <span className={Form_module_css_1.default.flag}>{emoji}</span>
      </div>

      <div className={Form_module_css_1.default.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
          <react_datepicker_1.default id="date" onChange={(date) => setDate(date)} selected={date} dateFormat='dd/MM/yyyy'/>
      </div>

      <div className={Form_module_css_1.default.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes}/>
      </div>

      <div className={Form_module_css_1.default.buttons}>
        <Button_1.default type="primary">Add</Button_1.default>
        <BackButton_1.default></BackButton_1.default>
      </div>
    </form>);
}
exports.default = Form;
