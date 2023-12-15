"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useGeolocation(defaultPosition = { lat: 0, lng: 0 }) {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [position, setPosition] = (0, react_1.useState)(defaultPosition);
    const [error, setError] = (0, react_1.useState)('');
    function getPosition() {
        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            });
            setIsLoading(false);
        }, (error) => {
            setError(error.message);
            setIsLoading(false);
        });
    }
    return { isLoading, position, error, getPosition };
}
exports.default = useGeolocation;
