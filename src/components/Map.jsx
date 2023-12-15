"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_leaflet_1 = require("react-leaflet");
const react_1 = require("react");
const Map_module_css_1 = __importDefault(require("./Map.module.css"));
const CitiesContext_1 = require("../contexts/CitiesContext");
const useGeolocation_1 = __importDefault(require("../hooks/useGeolocation"));
const Button_1 = __importDefault(require("./Button"));
const useUrlPosition_1 = __importDefault(require("../hooks/useUrlPosition"));
const Map = () => {
    const { cities } = (0, CitiesContext_1.useCities)();
    const [mapPosition, setMapPosition] = (0, react_1.useState)([40, 0]);
    const [mapLat, mapLng] = (0, useUrlPosition_1.default)();
    const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = (0, useGeolocation_1.default)();
    (0, react_1.useEffect)(() => {
        if (mapLat && mapLng)
            setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);
    (0, react_1.useEffect)(() => {
        if (geolocationPosition)
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }, [geolocationPosition]);
    return (<div className={Map_module_css_1.default.mapContainer}>
      {!geolocationPosition && <Button_1.default type='position' onClick={getPosition}>{isLoadingPosition ? 'Loading...' : "Use your position"}</Button_1.default>}
      <react_leaflet_1.MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={Map_module_css_1.default.map}>
        <react_leaflet_1.TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/>
        {cities.map(city => (<react_leaflet_1.Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <react_leaflet_1.Popup>
              <span>{city.emoji}</span><span>{city.cityName}</span>
            </react_leaflet_1.Popup>
          </react_leaflet_1.Marker>))}
          <ChangeCenter position={mapPosition}/>
          <DeleteClick />
      </react_leaflet_1.MapContainer>
    </div>);
};
const ChangeCenter = ({ position }) => {
    const map = (0, react_leaflet_1.useMap)();
    map.setView(position);
    return null;
};
const DeleteClick = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_leaflet_1.useMapEvents)({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    });
};
exports.default = Map;
