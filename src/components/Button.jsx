"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_module_css_1 = __importDefault(require("./Button.module.css"));
function Button({ children, onClick, type }) {
    return (<button className={`${Button_module_css_1.default.btn} ${Button_module_css_1.default[type]}`} onClick={(e) => onClick}>{children}</button>);
}
exports.default = Button;
