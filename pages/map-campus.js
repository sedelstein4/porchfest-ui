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
import {useEffect, useState} from "react";
import {Modal} from "@mantine/core";
import Navigation from "../components/Navigation/Navigation"
import {backendEndpoint} from "../Config";
import UserAPI from "../api/UserAPI";

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'; // Set your mapbox token here

const blurStyle ={
    filter:"blur(10px)",
    pointerEvents: "none",
    touchAction: "none",
    display:"block",
    height:"100vh", //otherwise filter will move the nav up behind the map
};

const modalStyle={
  textAlign: "center"

};

//temp data for modal
let name = "data1 - name"
let addrText = "data2 - address"
let timeText = "data3 - timeslot"
let aboutText = "data4 - about"
let imageSource = "/images/profile.jpeg"

export default function MapPage({ porchData}) {

    const [openNormal, setOpenNormal] = useState(false);
    const [openBlurred, setOpenBlurred] = useState(false);
    const [blurred, setBlurred] = useState(false);
    const [geoTracking, setGeoTracking] = useState(false)
    let isBlurred;
    if (blurred) isBlurred = blurStyle;

    useEffect(()=> {
        const data = localStorage.getItem('accessToken');
        if(data){
            const data = localStorage.getItem('accessToken');
            if(data){
                UserAPI.getUserProfile(data).then((resp) => {
                    const userData = resp
                    setGeoTracking(userData.trackLocation)
                })
            }
        }
        if ('geolocation' in navigator) {
            navigator.geolocation.watchPosition(function(position) {
                console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
                checkProximity(position.coords.latitude, position.coords.longitude);
            });
        }
    })

    //takes index of porch in porchData prop, opens
    function openModal(i, type){
        name = porchData[1][i];
        addrText = porchData[2][i];
        timeText = porchData[3][i];
        aboutText = porchData[4][i];
        imageSource = porchData[5][i];
        if (type === "normal"){
            setOpenNormal(true);

        }
        else if (type === "blurred"){
            setOpenBlurred(true);
        }
    }

    //return a color to color marker based on starting hour of marker/artist playing time
    function colorMarker(hour){
        hour = parseInt(hour);
        //TODO get current hour, base cases below on hours until the marker hour?
        switch(hour){
            default:
            case 11:
                return "#3fb1ce"
            case 12:
                return "#b8b8d9"
            case 1:
                return "#fcf093"
            case 2:
                return "#68fc68"
            case 3:
                return "#4ba94b"
            case 4:
                return "#a473a4"
        }
    }

    function GenerateMarkers(){
        //console.log(porchData);
        let markerList =[];
        for (let i = 0; i < porchData[0].length; i++){
            markerList.push(
                <Marker
                    key={i}
                    color={"blue"}
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
    function deg2rad(deg) {  return deg * (Math.PI/180) }

    function checkProximity(userLat, userLng){
        let dist = 1000;
        let porchIdx = -1;

        //loop through porchData coords, find closest to user location
        for (let i = 0; i < porchData[0].length; i++){
            let lat = porchData[0][i][0];
            let lng = porchData[0][i][1];
            let distToPorch = getDistanceFromLatLngInKm(userLat, userLng, lat, lng);
            console.log(distToPorch)
            if (distToPorch < dist){
                dist = distToPorch;
                porchIdx = i;
            }
        }
        if (porchIdx !== -1){
            if(dist < 0.04){ //within 8 meters
                setBlurred(true);
                openModal(porchIdx, "blurred");
            }
            else{
                setBlurred(false);
                setOpenBlurred(false);
            }
        }
    }

    return (
        <div>
            <Head>
                <title>Porchfest Map</title>
            </Head>
            <div style={isBlurred}>
                <Map
                    initialViewState={{
                        //Ithaca coords:
                        latitude: 42.422736,
                        longitude: -76.493621,
                        //Tburg coords:
                        // latitude: 42.541604,
                        // longitude: -76.660557,
                        zoom: 16,
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
                        positionOptions={{enableHighAccuracy: true}} //TODO disable if slow/unnecessary  on mobile devices
                        trackUserLocation={true}
                        showUserLocation={true}
                        />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl/>
                    {GenerateMarkers()}
                </Map>
                <Navigation />
            </div>
            <Modal
                sx={{
                    pointerEvents: "none",
                    touchAction: "none"
                }}
                opened={openBlurred}
                hideCloseButton={true}
                onClose={() => setOpenBlurred(false)}
                title={name}
                overlayOpacity={0.1}
            >
                <div style={modalStyle}>
                    <p> {addrText} <br /></p>
                    <img
                        src={imageSource}
                        alt={name}
                        width="150px"
                        height="150px"
                    />
                    {/*<p>Playing {timeText}<br />*/}
                    {/*    About: <br />{aboutText}<br />*/}
                    {/*</p>*/}
                    <p>Take a few steps away from the building to return to the map.</p>
                </div>
            </Modal>

            <Modal
                sx={{}}
                opened={openNormal}
                onClose={() => setOpenNormal(false)}
                title={name}
                overlayOpacity={0.1}
            >
               <div style={modalStyle}>
                   <p> {addrText}<br /></p>
                    <img
                        src={imageSource}
                        alt={name}
                        width="150px"
                        height="150px"
                    />
                    <p>Building at Ithaca College
                    </p>
               </div>
            </Modal>
        </div>
    );
}

function makeTimeStr(hour) {
    let ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    return hour + ampm;
}

// get all porch info for markers
export async function getStaticProps() {
    const res = await fetch(backendEndpoint + `porch`)
    const data = await res.json()

    let coords = [], names=[], addrs=[], times=[], abouts = [], photos=[]
   //Williams Hall
    names.push("William Hall")
    coords.push([42.422641,-76.495180])
    photos.push("/images/williams-hall.jpeg")

    //Campus Center
    names.push("Campus Center")
    coords.push([42.422427, -76.494396])
    photos.push("/images/campus-center.jpeg")
    // data.slice(0).map((artists, i) => {
    //     const artistData = Object.values(artists)[0]
    //     names.push(artistData.name)
    //     abouts.push(artistData.about)
    //     photos.push(artistData.photo ? artistData.photo : "/images/profile.jpeg")
    //     artistData.events.map((porches, i) => {
    //         coords.push([porches.latitude, porches.longitude])
    //         addrs.push(porches.address)
    //         //strip everything from time except hour number, assumes datetime in backend is in 24 hour format and already EST?
    //         let hours = parseInt(porches.time.split(" ")[4].slice(0,2))
    //         //TODO timezone?
    //         //generates a string in this format (example): 11am - 12pm
    //         let timeStr = makeTimeStr(hours) + " - " + makeTimeStr(hours+1)
    //         times.push(timeStr)
    //     });
    // });
    let porchData = [coords, names, addrs, times, abouts, photos]

    return {
        props: {porchData}
    }
}