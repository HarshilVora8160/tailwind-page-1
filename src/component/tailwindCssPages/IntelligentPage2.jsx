import CommonButton from "./common-components/CommonButtonComponent"
import CommonTitle from "./common-components/CommonTitleComponent"

import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import IntelligentCard from "./PagesCards.jsx/IntelligentPageCard";
import CommonHeading from "./common-components/CommonHeadingComponent";

const Intelligent = () => {

    const IntelligentComponentCards = [
        { cardIcon: <SwapVertOutlinedIcon className="text-green-900" />, title: "Adaptive Learning", content: "As content evolves, Scriptly Ai adapts, ensuring relevance." },
        { cardIcon: <ImportContactsOutlinedIcon className="text-green-900" />, title: "Extend Knowledge", content: "Train the AI an existing content for improved suggestions." },
        { cardIcon: <VerifiedUserOutlinedIcon className="text-green-900" />, title: "Brand Authenticity", content: "Intelligent suggestions that echo your brand's voice." },
        { cardIcon: <AccessTimeOutlinedIcon className="text-green-900" />, title: "Double Productivity", content: "Skip edits with AI trained wkith youe content for faster result." },
    ]

    return (
        <div className="p-10 md:p-20 xl:p-30" >
            <h1 className="" ><CommonHeading heading={"INTELLIGENT"} /></h1>
            <div className="grid grid-cols-12 py-5" >
                <div className="xl:col-span-6 col-span-12" >
                    <CommonTitle title={"Scriptly AI evolving with your content"} classStyle={"text-5xl w-[500px] font-semibold leading-14"} />
                </div>
                <div className="xl:col-span-4 md:col-span-8 col-span-10 xl:flex justify-end items-end py-5" >
                    <p className="text-gray-500" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illo incidunt voluptatibus alias, est impedit. Blanditiis fugiat placeat ratione similique enim.</p>
                </div>
                <div className="xl:col-span-2 md:col-span-8 col-span-8 md:flex xl:justify-end items-end" >
                    <CommonButton title={"Train Scriptly AI"} icon={true} classStyle={"bg-[#083D44] p-3 text-sm text-white px-5 rounded-xl font-semibold"} className="bg-[#083D44]" />
                </div>
                {/* <div>
                    <CommonCard cardsData={IntelligentComponentCards} />
                </div> */}
            </div>
            <div className="grid md:grid-cols-12 gap-5 py-10">
                {
                    IntelligentComponentCards?.map((ele, idx) => <IntelligentCard data={ele} />)
                }
            </div>
            
        </div>
    )
}

export default Intelligent