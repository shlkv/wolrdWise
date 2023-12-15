"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const useUrlPosition = () => {
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return [lat, lng];
};
exports.default = useUrlPosition;
