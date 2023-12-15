"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CountryList_module_css_1 = __importDefault(require("./CountryList.module.css"));
const Spinner_1 = __importDefault(require("./Spinner"));
const Message_1 = __importDefault(require("./Message"));
const CountryItem_1 = __importDefault(require("./CountryItem"));
const CitiesContext_1 = require("../contexts/CitiesContext");
function CountryList() {
    const { cities, isLoading } = (0, CitiesContext_1.useCities)();
    if (isLoading)
        return <Spinner_1.default />;
    if (!cities.length)
        return <Message_1.default message={"Add your first city"}/>;
    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }];
        else
            return arr;
    }, []);
    return (<ul className={CountryList_module_css_1.default.cityList}>
            {countries.map(country => <CountryItem_1.default country={country} key={Math.random()}/>)}
        </ul>);
}
exports.default = CountryList;
