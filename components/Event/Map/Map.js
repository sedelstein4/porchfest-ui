import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as Styles from "/components/Event/Map/styles"
import Navigation from "../../Navigation/Navigation";

export default function Map(props){
    return (
        <Styles.container>
            <MapContainer
                center={[42.44242, -76.49921]}
                zoom={13.5}
                scrollWheelZoom={true}
                style={{height: "calc(100vh - 53px)",
                    width: "100%",
                }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.mapbox.com/styles/v1/eplattpf/ckwvajgre0dpt14lhyr0vfncu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXBsYXR0cGYiLCJhIjoiY2t3dmFmOWNwMXk3MzJxanZmemUzM2dkaiJ9.AeD5w-nY9Bm7aXhPfdS4iA
"
                />
                <Marker position={[42.4440, -76.51019]}>
                    <Popup>
                        Test Popup (click on marker)
                    </Popup>
                </Marker>
            </MapContainer>
            <Navigation/>
        </Styles.container>
    )
}