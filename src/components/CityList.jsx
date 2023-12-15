"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CityItem_1 = __importDefault(require("./CityItem"));
const CountryList_module_css_1 = __importDefault(require("./CountryList.module.css"));
const Spinner_1 = __importDefault(require("./Spinner"));
const Message_1 = __importDefault(require("./Message"));
const CitiesContext_1 = require("../contexts/CitiesContext");
function CityList() {
    const { cities, isLoading } = (0, CitiesContext_1.useCities)();
    if (isLoading)
        return <Spinner_1.default />;
    if (!cities.length)
        return <Message_1.default message={"Add your first city"}/>;
    return (<ul className={CountryList_module_css_1.default.cityList}>
        {cities.map(city => <CityItem_1.default city={city} key={city.id}/>)}
    </ul>);
}
exports.default = CityList;
