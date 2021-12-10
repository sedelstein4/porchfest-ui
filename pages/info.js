import Head from "next/head";
import EventInfo from "../components/Event/Info/EventInfo";
import EventHeader from "../components/Event/Info/EventHeader";
import Default from "../layouts/default";
import Saved from "./saved";
import * as BtnStyle from "../components/Onboarding/Home/styles"
import Link from 'next/link'

export default function Info(data) {
    console.log(data)
    let nameFromBackend = "Porchfest 2021"; //temp

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
                imgPath={"/images/coverphoto.png"}
                name={nameFromBackend}
                dateStr={"September 22nd, 2021"}
                timeStr={"Noon-6pm"}
                desc={"Porchfest is a music festival held on the porches of the Fall Creek and Northside neighborhoods of Ithaca, NY."}
            />
            <Link href={"/map"} passHref>
                <BtnStyle.btn>GO TO MAP</BtnStyle.btn>
            </Link>
        </div>
    )}

Info.getLayout = function getLayout(page) {
    return (
        <Default>
            {page}
        </Default>
    )
}
