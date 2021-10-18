import Head from "next/head";
import EventInfo from "../components/Event/Info/EventInfo";
import EventHeader from "../components/Event/Info/EventHeader";

export default function Info(data) {
    console.log(data)
    let nameFromBackend = "Porchfest 2021"; //temp

    //need to change header or make new component to allow subheader (city name), also repurpose later for artist pages
        //and also changing the icon
    return (
        <div>
            <EventHeader
                title={nameFromBackend}
                city={"Ithaca, NY"}
            />
            <Head>
                <title>{nameFromBackend}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <EventInfo
            imgPath={"/images/profile.jpeg"}
            name={nameFromBackend}
            dateStr={"September 22nd, 2021"}
            timeStr={"Noon-6pm"}
            desc={"Porchfest is a music festival held on the porches of the Fall Creek and Northside neighborhoods of Ithaca, NY."}
        />
        </div>
    )}