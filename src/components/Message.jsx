"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_module_css_1 = __importDefault(require("./Message.module.css"));
function Message({ message }) {
    return (<p className={Message_module_css_1.default.message}>
      <span role="img">👋</span> {message}
    </p>);
}
exports.default = Message;
