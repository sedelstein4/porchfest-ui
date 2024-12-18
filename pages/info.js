import Head from "next/head";
import EventInfo from "../components/Event/Info/EventInfo";
import EventHeader from "../components/Event/Info/EventHeader";
import Default from "../layouts/default";

export default function Info(data) {
    let nameFromBackend = "Porchfest 2022"; //temp

    return (
        <div>
            <EventHeader
                title={nameFromBackend}
                city={"Trumansburg, NY"}
            />
            <Head>
                <title>{nameFromBackend}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <EventInfo
                imgPath={"/images/coverphoto.png"}
                name={nameFromBackend}
                dateStr={"June 11th, 2022"}
                timeStr={"Noon-5pm"}
                desc={"Trumansburg Porchfest brings the community together through music! It is a do-it yourself music festival featuring free shows on porches all over the neighborhood."}
            />
        </div>
    )}

Info.getLayout = function getLayout(page) {
    return (
        <Default>
            {page}
        </Default>
    )
}
