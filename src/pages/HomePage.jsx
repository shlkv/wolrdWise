"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Homepage_module_css_1 = __importDefault(require("./Homepage.module.css"));
const PageNav_jsx_1 = __importDefault(require("../components/PageNav.jsx"));
function Homepage() {
    return (<main className={Homepage_module_css_1.default.homepage}>
      <PageNav_jsx_1.default />

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <react_router_dom_1.Link to='/app' className="cta">Start tracking</react_router_dom_1.Link>
      </section>
    </main>);
}
exports.default = Homepage;
