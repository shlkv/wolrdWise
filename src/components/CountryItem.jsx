"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CountryItem_module_css_1 = __importDefault(require("./CountryItem.module.css"));
function CountryItem({ country }) {
    return (<li className={CountryItem_module_css_1.default.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>);
}
exports.default = CountryItem;
