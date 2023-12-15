"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PageNav_module_css_1 = __importDefault(require("./PageNav.module.css"));
const react_router_dom_1 = require("react-router-dom");
const Logo_1 = __importDefault(require("./Logo"));
function PageNav() {
    return (<nav className={PageNav_module_css_1.default.nav}>
        <Logo_1.default />

        <ul>
            <li>
                <react_router_dom_1.NavLink to='/Pricing'>Price</react_router_dom_1.NavLink>
            </li>
            <li>
                <react_router_dom_1.NavLink to='/Product'>Product</react_router_dom_1.NavLink>
            </li>
            <li>
                <react_router_dom_1.NavLink to='/Login' className='{styles.ctaLink}'>Login</react_router_dom_1.NavLink>
            </li>
        </ul>
    </nav>);
}
exports.default = PageNav;
