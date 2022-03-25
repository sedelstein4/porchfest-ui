import * as React from 'react';
import Head from 'next/head';
import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import ArtistModal from "../components/Event/ArtistModal/ArtistModal";
import {useState} from "react";
import {Modal} from "@mantine/core";
import Navigation from "../components/Navigation/Navigation"

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'; // Set your mapbox token here

const blurStyle ={
    filter:"blur(10px)",
    pointerEvents: "none",
    touchAction: "none",
    display:"block",
    height:"100vh", //otherwise filter will move the nav up behind the map
};
let bandText = "data1 - band";
let addrText = "data2 - address";
let timeText = "data3 - timeslot";

export default function Map2({ porchData}) {
    const [opened, setOpened] = useState(false);
    const [blurred, setBlurred] = useState(false);
    let isBlurred;
    if (blurred) isBlurred = blurStyle;

    //takes index of porch in porchData prop
    function openModal(i){
        bandText = porchData[1][i];
        addrText = porchData[2][i];
        timeText = porchData[3][i];
        setOpened(true);
        console.log("bandtext is: " + bandText)
    }

    function GenerateMarkers(){
        console.log(porchData);
        let markerList =[];
        for (let i = 0; i < porchData.length; i++){
            markerList.push(
                <Marker
                    key={i}
                    latitude = {porchData[0][i][0]}
                    longitude = {porchData[0][i][1]}
                    onClick={() =>
                        openModal(i)
                    }
                    >
                </Marker>
            )
        }
        return markerList;
    }
    //https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
    //Haversine Formula
    function getDistanceFromLatLngInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2-lat1);
        let dLon = deg2rad(lon2-lon1);
        let a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c; // Distance in km
    }
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    //TODO figure out "too many re-renders" error. Infinite loop somehow?
    function checkProximity(userLat, userLng){
        console.log("Checking Proximity")
        let dist = 1000;
        let porchIdx = -1;
        // let userLat = 42.446750;
        // let userLng= -76.498500;

        //loop through porchData coords, find closest to user location
        for (let i = 0; i < porchData.length; i++){
            let lat = porchData[0][i][0];
            let lng = porchData[0][i][1];
            let distToPorch = getDistanceFromLatLngInKm(userLat, userLng, lat, lng);
            console.log(distToPorch)
            if (distToPorch < dist){
                dist = distToPorch;
                porchIdx = i;
            }
        }
        if (porchIdx != -1){
            if(dist < 0.008){ //within 8 meters
                console.log("close!");
                setBlurred(true);
                openModal(porchIdx);
            }
            else{
                setBlurred(false);
            }
        }
    }

    return (
        <div>
            <Head>
                <title>react-map-gl example</title>
            </Head>
            <div style={isBlurred}>
                <Map
                    initialViewState={{
                        latitude: 42.44242,
                        longitude: -76.49921,
                        zoom: 14,
                        width: "100%",
                        height: "100vh"
                    }}
                    style={{height: "calc(100vh - 69px)", //navbar has 69px height
                        width: "100%",
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'}
                >
                    <GeolocateControl
                        position="top-left"
                        positionOptions={{enableHighAccuracy: true}} //TODO disable if slow on mobile devices
                        trackUserLocation={true}
                        onGeoLocate={checkProximity(42.446750, -76.498500)} //TODO get real user location
                    />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl/>
                    <Marker latitude={42.44242} longitude={-76.499} color="red"/>
                    {GenerateMarkers()}
                </Map>
                <Navigation />
            </div>
            <Modal
                sx={{/*TODO put modal styling here*/}}
                opened={opened}
                onClose={() => setOpened(false)}
                title={bandText}
                overlayOpacity={0.1}
            >
                <p> {addrText} - {bandText} <br />Playing {timeText}.</p>
            </Modal>
        </div>
    );
}

export async function getStaticProps() {
    // get all porch info for markers
    // const res = await fetch('http://localhost:5000/porches')
    // const porches = await res.json()

    //TODO this won't be the format of the database so will need to edit map component after
    let coords = [[42.446700, -76.498440], [42.444860, -76.502120], [42.449340, -76.500430], [42.422660, -76.495167]];
    let bands = ["Cielle", "The Flywheels", "Lloyd's Boys", "Jimilab Team"];
    let addrs = ["210 Utica St", "105 2nd Str", "219 Auburn St", "Williams Hall"];
    let times = ["4-5pm", "11am-12pm", "1-2pm", "3-4pm"];
    let porchData = [coords, bands ,addrs, times];

    return {
        props: {porchData}
    }
}