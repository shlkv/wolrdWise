"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const AppNav_module_css_1 = __importDefault(require("./AppNav.module.css"));
function AppNav() {
    return (<nav className={AppNav_module_css_1.default.nav}>
        <ul>
          <li>
            <react_router_dom_1.NavLink to='cities'>Cities</react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to='countries'>countries</react_router_dom_1.NavLink>
          </li>
        </ul>
    </nav>);
}
exports.default = AppNav;
