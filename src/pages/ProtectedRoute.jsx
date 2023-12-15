"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FakeAuthContext_1 = require("../contexts/FakeAuthContext");
const react_router_dom_1 = require("react-router-dom");
function ProtectedRoute({ children }) {
    const { isAuthenticated } = (0, FakeAuthContext_1.useAuth)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (!isAuthenticated)
            navigate("/");
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? children : null;
}
exports.default = ProtectedRoute;
