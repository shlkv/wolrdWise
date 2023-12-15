"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
const react_1 = require("react");
const AuthContext = (0, react_1.createContext)(undefined);
const initialState = {
    user: null,
    isAuthenticated: false,
};
// const action:actionType = {
//     type:'',
//     payload:''
// }
const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return Object.assign(Object.assign({}, state), { user: action.payload, isAuthenticated: true });
        case "logout":
            return Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false });
        default:
            throw new Error("unknown action");
    }
};
const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};
const AuthProvider = ({ children }) => {
    const [{ user, isAuthenticated }, dispatch] = (0, react_1.useReducer)(reducer, initialState);
    // type loginType = {
    //     email:'',
    //     password: ''
    // }
    const login = (email, password) => {
        if (email === FAKE_USER.email && password === FAKE_USER.password)
            dispatch({ type: 'login', payload: FAKE_USER });
    };
    const logout = () => {
        dispatch({ type: 'logout' });
    };
    return (<AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>);
};
exports.AuthProvider = AuthProvider;
const useAuth = () => {
    const context = (0, react_1.useContext)(AuthContext);
    if (context === undefined)
        throw new Error("AuthContext outside AuthProvider");
    return context;
};
exports.useAuth = useAuth;
