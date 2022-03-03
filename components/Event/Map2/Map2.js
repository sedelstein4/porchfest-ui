import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export default function Map2({ locations }) {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude of the center of London
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 10
    });
    return <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFqanltMjA2czNrbzBlMTFhd3c5MCJ9.ehvSjpnGoDX986aN3nTE5g'}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {locations.map((location) => (
            <div key={location.id}>
                <Marker
                    latitude={location.center[1]}
                    longitude={location.center[0]}
                    offsetLeft={-20}
                    offsetTop={-10}>
                    <span role="img" aria-label="push-pin">📌</span>
                </Marker>
            </div>
        ))}
    </ReactMapGL>
}