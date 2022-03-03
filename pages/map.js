import React from "react";
import dynamic from "next/dynamic";

export default function map({ porchData }) {
    const Map = dynamic(
        () => import('/components/Event/Map/Map'),
        { ssr: false } // This line is important. It's what prevents server-side render
    )
    return <Map porchData={porchData}/>
}

export async function getStaticProps() {
    // get all porch info for markers
    // const res = await fetch('http://localhost:5000/porches')
    // const porches = await res.json()
    //Need: Addresses, Coordinates, Band Names, and Time Slots

    //TODO this won't be the format of the database so will need to edit map component after
    let addrs = ["210 Utica St", "105 2nd Str", "219 Auburn St", "Williams Hall"];
    let coords = [[42.446700, -76.498440], [42.444860, -76.502120], [42.449340, -76.500430], [42.422660, -76.495167]];
    let bands = ["Cielle", "The Flywheels", "Lloyd's Boys", "Jimilab Team"];
    let times = ["4-5pm", "11am-12pm", "1-2pm", "3-4pm"];
    let porchData = [addrs, coords, bands, times];

    return {
        props: {porchData}
    }
}