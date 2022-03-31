import * as React from 'react';
import Head from 'next/head';
import Map, {
    Marker,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
// import ArtistModal from "../components/Event/ArtistModal/ArtistModal";
import {useEffect, useState} from "react";
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

    const [openNormal, setOpenNormal] = useState(false);
    const [openBlurred, setOpenBlurred] = useState(false);
    const [blurred, setBlurred] = useState(false);
    let isBlurred;
    if (blurred) isBlurred = blurStyle;

    useEffect(()=> {
        if ('geolocation' in navigator) {
            navigator.geolocation.watchPosition(function(position) {
                console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
                checkProximity(position.coords.latitude, position.coords.longitude);
            });
        }
    })

    //takes index of porch in porchData prop, opens
    function openModal(i, type){
        bandText = porchData[1][i];
        addrText = porchData[2][i];
        timeText = porchData[3][i];
        if (type === "normal"){
            setOpenNormal(true);

        }
        else if (type === "blurred"){
            setOpenBlurred(true);
        }
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
                        openModal(i, "normal")
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
        let dist = 1000;
        let porchIdx = -1;

        //loop through porchData coords, find closest to user location
        for (let i = 0; i < porchData.length; i++){
            let lat = porchData[0][i][0];
            let lng = porchData[0][i][1];
            let distToPorch = getDistanceFromLatLngInKm(userLat, userLng, lat, lng);
            if (distToPorch < dist){
                dist = distToPorch;
                porchIdx = i;
            }
        }
        if (porchIdx !== -1){
            if(dist < 0.008){ //within 8 meters
                setBlurred(true);
                openModal(porchIdx, "blurred");
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
                    />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl/>
                    {GenerateMarkers()}
                </Map>
                <Navigation />
            </div>
            <Modal
                sx={{pointerEvents: "none", touchAction: "none" }}
                opened={openBlurred}
                hideCloseButton={true}
                onClose={() => setOpenBlurred(false)}
                title={bandText}
                overlayOpacity={0.1}
            >
                <p> {addrText} - {bandText} <br />
                    Playing {timeText}.</p><br />
                Take a few steps away from the stage to return to the map.
            </Modal>
            <Modal
                sx={{}}
                opened={openNormal}
                onClose={() => setOpenNormal(false)}
                title={bandText}
                overlayOpacity={0.1}
            >
                <p> {addrText} - {bandText} <br />
                    Playing {timeText}.</p><br />
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