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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCities = exports.CitiesProvider = void 0;
const react_1 = __importStar(require("react"));
const CitiesContext = (0, react_1.createContext)(undefined);
const BASE_URL = 'http://localhost:8000';
const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
};
const reducer = ({ state, action }) => {
    switch (action.type) {
        case 'loading':
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case 'cities/loaded':
            return Object.assign(Object.assign({}, state), { isLoading: false, cities: action.payload });
        case 'city/created':
            return Object.assign(Object.assign({}, state), { isLoading: false, cities: [...state.cities, action.payload], currentCity: action.payload });
        case 'city/loaded':
            return Object.assign(Object.assign({}, state), { isLoading: false, currentCity: action.payload });
        case 'city/deleted':
            return Object.assign(Object.assign({}, state), { isLoading: false, currentCity: {}, cities: state.cities.filter((city) => city.id !== action.payload) });
        case 'rejected':
            return Object.assign(Object.assign({}, state), { isLoading: false, error: action.payload });
        default:
            throw new Error('Unknown action type');
    }
};
const CitiesProvider = ({ children }) => {
    const [{ cities, isLoading, currentCity, error }, dispatch] = (0, react_1.useReducer)(reducer, initialState);
    (0, react_1.useEffect)(() => {
        const fetchCities = () => __awaiter(void 0, void 0, void 0, function* () {
            dispatch({ type: 'loading' });
            try {
                const res = yield fetch(`${BASE_URL}/cities`);
                const data = yield res.json();
                dispatch({ type: 'cities/loaded', payload: data });
            }
            catch (_a) {
                dispatch({ type: 'rejected', payload: "ERROR" });
            }
        });
        fetchCities();
    }, []);
    const getCity = (0, react_1.useCallback)(function getCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Number(id) === currentCity.id)
                return;
            dispatch({ type: 'loading' });
            try {
                const res = yield fetch(`${BASE_URL}/cities/${id}`);
                const data = yield res.json();
                dispatch({ type: 'city/loaded', payload: data });
            }
            catch (_a) {
                dispatch({ type: 'rejected', payload: "ERROR" });
            }
        });
    }, [currentCity.id]);
    const createCity = (newCity) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: 'loading' });
        try {
            const res = yield fetch(`${BASE_URL}/cities`, { method: 'POST', body: JSON.stringify(newCity), headers: { "Content-Type": "application/json" } });
            const data = yield res.json();
            dispatch({ type: 'city/deleted', payload: data });
        }
        catch (_a) {
            dispatch({ type: 'rejected', payload: "ERROR" });
        }
    });
    const deleteCity = (id) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: 'loading' });
        try {
            yield fetch(`${BASE_URL}/cities`, { method: 'DELETE' });
            dispatch({ type: 'city/deleted', payload: id });
        }
        catch (_b) {
            dispatch({ type: 'rejected', payload: "ERROR" });
        }
    });
    return (<CitiesContext.Provider value={{
            cities,
            isLoading,
            currentCity,
            getCity,
            createCity,
            deleteCity,
            error
        }}>
            {children}
        </CitiesContext.Provider>);
};
exports.CitiesProvider = CitiesProvider;
const useCities = () => {
    const context = (0, react_1.useContext)(CitiesContext);
    if (context === undefined)
        throw new Error('Outside context');
    return context;
};
exports.useCities = useCities;
