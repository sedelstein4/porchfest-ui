import * as Styles from "/components/Event/Map/styles"
import Navigation from "../../Navigation/Navigation";
import {useState} from "react";

import 'leaflet/dist/leaflet.css'

//marker urls are messed with by webpack, need this plugin to fix it
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const blurred ={
    filter:"blur(10px)",
    pointerEvents: "none",
    touchAction: "none",
    display:"block",
    height:"100vh", //otherwise filter will move the nav up behind the map
    //transition: "filter 0.5s linear" //will this work?
};

const displayed ={
    display:"block !important",
}

export default function Map(props){
    const [state, setState] = useState('initial')
    let isBlurred;
    let isDisplayed = false;

    const proximityEvent = () => { //not sure if this will work or how we will detect proximity to a porch, placeholder
        setState('blur')
    }

    if (state === 'blur') {
        isBlurred = blurred;
        isDisplayed = !isDisplayed;
    }

    return (
        <div>
            <Styles.nowViewing style={{display: isDisplayed?"block":"none"}}>
                Now Viewing: <br /><br />
                [display artist info, img, links] <br/><br/>
                Take a few steps back from the stage to return to the map.
            </Styles.nowViewing>
            <div style={isBlurred} onClick={() => proximityEvent()}>
                <MapContainer
                    center={[42.44242, -76.49921]}
                    zoom={13.5}
                    scrollWheelZoom={true}
                    doubleClickZoom={false}
                    tap={false} //when enabled, very difficult to open popup in mobile view on browser. need to test on real mobile device.
                    style={{height: "calc(100vh - 69px)",
                        width: "100%",
                        display:"block",
                    }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.mapbox.com/styles/v1/eplattpf/ckwvajgre0dpt14lhyr0vfncu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXBsYXR0cGYiLCJhIjoiY2t3dmFmOWNwMXk3MzJxanZmemUzM2dkaiJ9.AeD5w-nY9Bm7aXhPfdS4iA"
                    />
                    <Marker position={[42.422660, -76.495167]}>
                        <Popup>
                            <span>Williams Hall</span>
                        </Popup>
                    </Marker>
                    <Marker position={[42.446700, -76.498440]}>
                        <Popup>
                            <span>210 Utica St - Cielle</span>
                        </Popup>
                    </Marker>
                    <Marker position={[42.444860, -76.502120]}>
                        <Popup>
                            <span>105 2nd Str - The Flywheels</span>
                        </Popup>
                    </Marker>
                    <Marker position={[42.449340, -76.500430]}>
                        <Popup>
                            <span>219 Auburn St - Lloyd's Boys)</span>
                        </Popup>
                    </Marker>
                </MapContainer>
                <Navigation/>
            </div>
        </div>
    )
}