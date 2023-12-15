"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const AppNav_1 = __importDefault(require("./AppNav"));
const Logo_1 = __importDefault(require("./Logo"));
const Sidebar_module_css_1 = __importDefault(require("./Sidebar.module.css"));
function SideBar() {
    return (<div className={Sidebar_module_css_1.default.sidebar}>
            <Logo_1.default />
            <AppNav_1.default />

            <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
            <footer className={Sidebar_module_css_1.default.footer}>
                <p className={Sidebar_module_css_1.default.copyright}>
                    &copy; Copyrighting {new Date().getFullYear()} by WorldWise Inc.
                </p>
            </footer>
        </div>);
}
exports.default = SideBar;
