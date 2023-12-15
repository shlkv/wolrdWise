"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Logo_module_css_1 = __importDefault(require("./Logo.module.css"));
function Logo() {
    return (<react_router_dom_1.Link to="/">
       <img src="/logo.png" alt="WorldWise logo" className={Logo_module_css_1.default.logo}/>
    </react_router_dom_1.Link>);
}
exports.default = Logo;
