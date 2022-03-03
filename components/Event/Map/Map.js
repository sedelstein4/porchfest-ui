import * as Styles from "/components/Event/Map/styles"
import Navigation from "../../Navigation/Navigation";
import React, {useEffect, useRef, useState} from "react";

import 'leaflet/dist/leaflet.css'

//marker urls are messed with by webpack, need this plugin to fix it
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
//import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import Head from "next/head";

const blurred ={
    filter:"blur(10px)",
    pointerEvents: "none", //TODO
    // touchAction: "none",
    display:"block",
    height:"100vh", //otherwise filter will move the nav up behind the map
    //transition: "all 2s",
    //transition: "filter 0.5s linear, 1s -webkit-filter linear" //will this work?
};

// let lat = 0.0;
// let long =0.0;
// function getLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             lat =position.coords.latitude;
//             long = position.coords.longitude;
//         });
//     }
//}

export default function Map(props){
    const [state, setState] = useState('initial')
    let isBlurred;
    let isDisplayed = false;

    const proximityEvent = () => { //not sure if this will work or how we will detect proximity to a porch, placeholder
        if (state ==='blur'){
            setState('initial');
        }
        else{
            // setState('blur'); //also comment this out
        }
        //setState('blur'); //TODO comment this out to stop the blur from happening (while it is based on clicking)
    }
    if (state === 'blur') {
        isBlurred = blurred;
        isDisplayed = !isDisplayed;
    }

    //Function to get the user's current location and generate a marker component for the map below
    //Shoutout to this hero: https://stackoverflow.com/a/65981352
    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const map = useMap();

        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
            });
        }, []);

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        );
    }

    //create all porch markers for the map from given props
    //TODO may need to redo slightly once database is set
    function GenerateMarkers(){
        console.log(props.porchData);
        let data = props.porchData;

        let markerList =[];
        for (let i = 0; i < data.length; i++){

            markerList.push(
                <Marker key={i} position={data[1][i]}>
                    <Popup>
                        <span>{data[0][i]} - {data[2][i]}<br />Playing {data[3][i]}</span>
                    </Popup>
                </Marker>
            )
        }
        return markerList;
    }

    return (
        <div>
            <Head>
                <title>Event Map</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Styles.nowViewing style={{display: isDisplayed?"block":"none"}}>
                Now Viewing: <br /><br />
                [display artist info, img, links] <br/><br/>
                Take a few steps back from the stage to return to the map.<br/>
            </Styles.nowViewing>
            <div style={isBlurred} onClick={() => proximityEvent()}>
                <MapContainer
                    center={[42.44242, -76.49921]} //Ithaca, TODO will need to add support for changing this for multiple porchfests
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
                    {GenerateMarkers()}
                    <LocationMarker />
                </MapContainer>
                <Navigation/>
            </div>
        </div>
    )
}