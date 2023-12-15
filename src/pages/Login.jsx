"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Login_module_css_1 = __importDefault(require("./Login.module.css"));
const PageNav_1 = __importDefault(require("../components/PageNav"));
const FakeAuthContext_1 = require("../contexts/FakeAuthContext");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("../components/Button"));
function Login() {
    const { login, isAuthenticated } = (0, FakeAuthContext_1.useAuth)();
    // PRE-FILL FOR DEV PURPOSES
    const [email, setEmail] = (0, react_1.useState)("jack@example.com");
    const [password, setPassword] = (0, react_1.useState)("qwerty");
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (isAuthenticated)
            navigate('/app', { replace: true });
    }, [isAuthenticated, navigate]);
    const handleClick = (e) => {
        e.preventDefault();
        if (email && password)
            login(email, password);
    };
    return (<main className={Login_module_css_1.default.login}>
      <PageNav_1.default />
      <form className={Login_module_css_1.default.form}>
        <div className={Login_module_css_1.default.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>

        <div className={Login_module_css_1.default.row}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>

        <div>
          <Button_1.default type='primary' onClick={handleClick}>Login</Button_1.default>
        </div>
      </form>
    </main>);
}
exports.default = Login;
