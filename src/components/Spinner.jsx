"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Spinner_module_css_1 = __importDefault(require("./Spinner.module.css"));
function Spinner() {
    return (<div className={Spinner_module_css_1.default.spinnerContainer}>
      <div className={Spinner_module_css_1.default.spinner}></div>
    </div>);
}
exports.default = Spinner;
