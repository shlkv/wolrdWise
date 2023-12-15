"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Spinner_1 = __importDefault(require("./Spinner"));
const SpinnerFullPage_module_css_1 = __importDefault(require("./SpinnerFullPage.module.css"));
function SpinnerFullPage() {
    return (<div className={SpinnerFullPage_module_css_1.default.spinnerFullpage}>
      <Spinner_1.default />
    </div>);
}
exports.default = SpinnerFullPage;
