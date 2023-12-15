"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const FakeAuthContext_1 = require("../contexts/FakeAuthContext");
const User_module_css_1 = __importDefault(require("./User.module.css"));
// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };
function User() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user, logout, isAuthenticated } = (0, FakeAuthContext_1.useAuth)();
    console.log(isAuthenticated);
    // const user = FAKE_USER;
    function handleClick(e) {
        e.preventDefault();
        navigate(-1);
        logout();
    }
    if (isAuthenticated)
        return (<div className={User_module_css_1.default.user}>
      <img src={user.avatar} alt={user.name}/>
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>);
}
exports.default = User;
/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
