"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("./Button"));
function BackButton() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<Button_1.default type="back" onClick={(e) => {
            e.preventDefault();
            navigate(-1);
        }}>
                &larr; Back
        </Button_1.default>);
}
exports.default = BackButton;
