import * as Styles from "/components/Event/Map/styles"
import Navigation from "../../Navigation/Navigation";


import 'leaflet/dist/leaflet.css'

//marker urls are messed with by webpack, need this plugin to fix it
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Map(props){
    return (
        <Styles.container>
            <MapContainer
                center={[42.44242, -76.49921]}
                zoom={13.5}
                scrollWheelZoom={true}
                //closePopupOnClick={true}
                doubleClickZoom={false}
                tap={false} //when enabled, very difficult to open popup in mobile view on browser. need to test on real mobile device.
                style={{height: "calc(100vh - 69px)",
                    width: "100%",
                }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.mapbox.com/styles/v1/eplattpf/ckwvajgre0dpt14lhyr0vfncu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXBsYXR0cGYiLCJhIjoiY2t3dmFmOWNwMXk3MzJxanZmemUzM2dkaiJ9.AeD5w-nY9Bm7aXhPfdS4iA"
                />
                <Marker position={[42.4440, -76.51019]}>
                    <Popup>
                        <span>Test Popup (click on marker)</span>
                    </Popup>
                </Marker>
            </MapContainer>
            <Navigation/>
        </Styles.container>
    )
}