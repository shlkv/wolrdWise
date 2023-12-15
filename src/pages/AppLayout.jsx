"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = __importDefault(require("../components/Map"));
const SideBar_1 = __importDefault(require("../components/SideBar"));
const User_1 = __importDefault(require("../components/User"));
const AppLayout_module_css_1 = __importDefault(require("./AppLayout.module.css"));
function AppLayout() {
    return (<div className={AppLayout_module_css_1.default.app}>
        <SideBar_1.default />
        <Map_1.default />
        <User_1.default />
    </div>);
}
exports.default = AppLayout;
