export const GeoBlurScreen = process.env.Geo_Blur_Screen
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
import {backendEndpoint} from "../Config";
import UserAPI from "../api/UserAPI";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Navigation/Header";

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'; // Set your mapbox token here

const blurStyle ={
    filter:"blur(10px)",
    pointerEvents: "none",
    touchAction: "none",
    display:"block",
    height:"100vh", //otherwise filter will move the nav up behind the map
};

const modalBody={

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
    const [geoTracking, setGeoTracking] = useState(false);
    const [blurSetting, setBlurSetting] = useState(true);
    const [savedArtists, setSavedArtists] = useState("");
    const [isDataLoaded, setDataLoaded] = useState(false);
    const [filterType, setFilterType] = useState("")
    let isBlurred;
    if (blurred) isBlurred = blurStyle;

    useEffect(()=> {
        const data = localStorage.getItem('accessToken');
        const f = localStorage.getItem('filter_type');
        if(f !== undefined && f !== null){
            setFilterType(localStorage.getItem('filter_type'))
        }
        else{
            setFilterType("all")
        }
        if (!data){ //if getting user data failed or not logged in
            setDataLoaded(true)
            setSavedArtists("empty") //no saved artists
        }
        if(data && !isDataLoaded){
            UserAPI.getUserProfile(data).then((resp) => {
                setGeoTracking(resp.trackLocation)
                //setBlurSetting(resp.blurSetting)
            })
            UserAPI.getUserSavedArtists(data).then((saved) => {
                setSavedArtists(JSON.stringify(saved))
            })
            setDataLoaded(true)
        }
        if ('geolocation' in navigator && geoTracking) {
            navigator.geolocation.watchPosition(function(position) {
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
        switch(hour){
            default:
            case 11:
                return "#FFF534"
            case 12:
                return "#FBD032"
            case 1:
                return "#F8AB30"
            case 2:
                return "#F4852F"
            case 3:
                return "#F1602D"
            case 4:
                return "#ED3B2B"
        }
    }

    function GenerateMarkers(){
        if(isDataLoaded && savedArtists.length > 0){
            let markerList = [];
            for (let i = 0; i < porchData[0].length; i++) {
                let markerColor = colorMarker(porchData[3][i].slice(0, 2));
                switch(filterType){
                    case 'all':
                    case porchData[3][i]: //if current porch's time is equal to set filter display it
                        markerList.push(
                            <Marker
                                key={i}
                                color={markerColor}
                                latitude={porchData[0][i][0]}
                                longitude={porchData[0][i][1]}
                                onClick={() =>
                                    openModal(i, "normal")
                                }
                            >
                                {savedArtists.includes(porchData[1][i]) ?
                                    <div style={{color:markerColor}}>
                                        <FontAwesomeIcon icon={faHeart} style={{width:"28px", height:"28px"}}/>
                                    </div>
                                : null}

                            </Marker>
                        )
                        break;
                    case 'saved': //only show saved artists
                        if (savedArtists.includes(porchData[1][i])){
                            markerList.push(
                                <Marker
                                    key={i}
                                    color={markerColor}
                                    latitude={porchData[0][i][0]}
                                    longitude={porchData[0][i][1]}
                                    onClick={() =>
                                        openModal(i, "normal")
                                    }
                                >
                                <div style={{color:markerColor}}>
                                    <FontAwesomeIcon icon={faHeart} style={{width:"28px", height:"28px"}}/>
                                </div>
                                </Marker>
                            )
                        }
                        break;
                }
            }
            return markerList;
        }
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
        let hours = new Date();
        hours = hours.getHours();
        hours = makeTimeStr(hours) + " - " + makeTimeStr(hours + 1);

        //loop through porchData coords, find closest to user location
        for (let i = 0; i < porchData[0].length; i++){
            let lat = porchData[0][i][0];
            let lng = porchData[0][i][1];
            let distToPorch = getDistanceFromLatLngInKm(userLat, userLng, lat, lng);
            if (distToPorch < dist){
                dist = distToPorch;
                porchIdx = i;
            }
        }
        if (porchIdx !== -1){
            //within 8 meters, playing in current time slot, blur is enabled in amplify, blur is enabled by user
            let doBlur = dist < 0.008 && porchData[3][porchIdx] === hours && GeoBlurScreen && blurSetting
            if( doBlur ){
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
        <div style={{marginTop:"64px", marginBottom:"60px"}}>
            <Head>
                <title>Porchfest Map</title>
            </Head>
            <div style={isBlurred}>
            <Header title={"Porchfest Map"} pageType={"map"}/>
                <Map
                    initialViewState={{
                        //Ithaca coords:
                        //latitude: 42.44242,
                        //longitude: -76.49921,
                        //Tburg coords:
                        latitude: 42.541604,
                        longitude: -76.660557,
                        zoom: 14,
                    }}
                    style={{height: "calc(100vh - 132px)",
                        width: "100%",
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'}
                >
                    {geoTracking ?
                        <GeolocateControl
                        position="top-left"
                        positionOptions={{enableHighAccuracy: true}} //TODO disable if slow/unnecessary  on mobile devices
                        trackUserLocation={geoTracking}
                        showUserLocation={geoTracking}
                        />
                        : console.log("Geotracking disabled") //TODO do something else? Let user know somehow?
                    }
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl/>
                    {GenerateMarkers()}
                </Map>
                <Navigation />
            </div>
            <Modal
                sx={{
                    textAlign: "center",
                    pointerEvents: "none",
                    touchAction: "none"
                }}
                opened={openBlurred}
                hideCloseButton={true}
                onClose={() => setOpenBlurred(false)}
                title={name}
                overlayOpacity={0.1}
            >
                <div style={modalBody}>
                    <p> {addrText} <br /></p>
                    <img
                        src={imageSource}
                        alt={name}
                        width="150px"
                        height="150px"
                    />
                    <p>Playing {timeText}<br />
                        About: <br />{aboutText}<br />
                    </p>
                    Take a few steps away from the stage to return to the map.
                </div>
            </Modal>

            <Modal
                sx={{
                   textAlign: "center",
                }}
                opened={openNormal}
                onClose={() => setOpenNormal(false)}
                title={name}
                overlayOpacity={0.1}
            >
               <div style={modalBody}>
                   <p> {addrText}<br /></p>
                    <img
                        src={imageSource}
                        alt={name}
                        width="150px"
                        height="150px"
                    />
                    <p>Playing {timeText}<br />
                        About:<br /> {aboutText}<br />
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
    data.slice(0).map((artists, i) => {
        const artistData = Object.values(artists)[0]
        names.push(artistData.name)
        abouts.push(artistData.about)
        photos.push(artistData.photo ? artistData.photo : "/images/profile.jpeg")
        artistData.events.map((porches, i) => {
            coords.push([porches.latitude, porches.longitude])
            addrs.push(porches.address)
            //strip everything from time except hour number, assumes datetime in backend is in 24 hour format and already EST
            let hours = parseInt(porches.time.split(" ")[4].slice(0,2))
            //generates a string in this format (example): 11am - 12pm
            let timeStr = makeTimeStr(hours) + " - " + makeTimeStr(hours+1)
            times.push(timeStr)
        });
    });

    let porchData = [coords, names, addrs, times, abouts, photos]

    return {
        props: {porchData}
    }
}