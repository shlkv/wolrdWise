"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const CitiesContext_1 = require("./contexts/CitiesContext");
const FakeAuthContext_1 = require("./contexts/FakeAuthContext");
const ProtectedRoute_1 = __importDefault(require("./pages/ProtectedRoute"));
const CityList_1 = __importDefault(require("./components/CityList"));
const City_1 = __importDefault(require("./components/City"));
const Form_1 = __importDefault(require("./components/Form"));
const CountriesList_1 = __importDefault(require("./components/CountriesList"));
const SpinnerFullPage_1 = __importDefault(require("./components/SpinnerFullPage"));
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
const HomePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./pages/HomePage'))));
const Product = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./pages/Product'))));
const Pricing = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./pages/Pricing'))));
const PageNotFound = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./pages/PageNotFound'))));
const AppLayout = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./pages/AppLayout'))));
const Login = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./pages/Login'))));
function App() {
    return (<CitiesContext_1.CitiesProvider>
      <FakeAuthContext_1.AuthProvider>
        <react_router_dom_1.BrowserRouter>
          <react_1.Suspense fallback={<SpinnerFullPage_1.default />}>
            <react_router_dom_1.Routes>
              <react_router_dom_1.Route index element={<HomePage />}/>
              <react_router_dom_1.Route path="product" element={<Product />}/>
              <react_router_dom_1.Route path="pricing" element={<Pricing />}/>
              <react_router_dom_1.Route path="/login" element={<Login />}/>
              <react_router_dom_1.Route path="app" element={<ProtectedRoute_1.default><AppLayout /></ProtectedRoute_1.default>}>
                <react_router_dom_1.Route index element={<react_router_dom_1.Navigate replace to="cities"/>}/>
                <react_router_dom_1.Route path="cities" element={<CityList_1.default />}/>
                <react_router_dom_1.Route path="cities/:id" element={<City_1.default />}/>
                <react_router_dom_1.Route path="countries" element={<CountriesList_1.default />}/>
                <react_router_dom_1.Route path="form" element={<Form_1.default />}/>
              </react_router_dom_1.Route>
              <react_router_dom_1.Route path="*" element={<PageNotFound />}/>
            </react_router_dom_1.Routes>
          </react_1.Suspense>
        </react_router_dom_1.BrowserRouter>
      </FakeAuthContext_1.AuthProvider>
    </CitiesContext_1.CitiesProvider>);
}
exports.default = App;
