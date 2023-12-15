"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const CityItem_module_css_1 = __importDefault(require("./CityItem.module.css"));
const CitiesContext_1 = require("../contexts/CitiesContext");
const formatDate = (date) => new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
}).format(new Date(date));
function CityItem({ city }) {
    const { cityName, emoji, date, id, position } = city;
    const { currentCity, deleteCity } = (0, CitiesContext_1.useCities)();
    const handleClick = (e) => {
        e.preventDefault();
        deleteCity(id);
    };
    return (<li className={CityItem_module_css_1.default.cityListItem}>
      <react_router_dom_1.Link className={`${CityItem_module_css_1.default.cityItem} ${id === currentCity.id ? CityItem_module_css_1.default['cityItem--active'] : ''}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={CityItem_module_css_1.default.emoji}>{emoji}</span>
        <h3 className={CityItem_module_css_1.default.name}>{cityName}</h3>
        <time className={CityItem_module_css_1.default.date}>{formatDate(date)}</time>
        <button className={CityItem_module_css_1.default.deleteBtn} onClick={() => handleClick}>&times;</button>
      </react_router_dom_1.Link>
    </li>);
}
exports.default = CityItem;
