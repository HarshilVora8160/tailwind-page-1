import CommonButton from "./common-components/CommonButtonComponent"
import CommonHeading from "./common-components/CommonHeadingComponent"
import CommonTitle from "./common-components/CommonTitleComponent"
import IntelligentCard from "./PagesCards.jsx/IntelligentPageCard"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FilterTiltShiftOutlinedIcon from '@mui/icons-material/FilterTiltShiftOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import DarkProductivityCard from "./PagesCards.jsx/DarkProductivityCard";

const DarkProductivity = () => {

    const darkProductivityData = [
        { cardIcon: <RemoveRedEyeOutlinedIcon  />, title: "Eye Comfort for extended Use", content: "Our night-mode theme significantly eases eye strain, ensuring productive late-night and early morning sessions. " },
        { cardIcon: <FilterTiltShiftOutlinedIcon  />, title: "Enhanced Focus & Concentration", content: "Cut Distraction and Focus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est voluptates consectetur et repellat facere!" },
        { cardIcon: <EmojiObjectsOutlinedIcon  />, title: "After-Dark Creativity", content: "Intelligent suggestions that echo your brand's voice Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ]

    return (
        <div className="bg-[#083D44] py-10 my-20 flex justify-center items-center px-10 md:px-20 xl:px-30" >
            <div className="mt-10" >
                <div className="flex justify-center" >
                    <CommonHeading heading={"AFTER-DARK PRODUCTIVITY"} />
                </div>
                <div className="flex justify-center text-center" >
                    <CommonTitle title={"Comfortable Nighttime Writing with Dark Mode"} classStyle={"text-3xl md:text-4xl lg:text-5xl font-semibold py-5 text-white"} />
                </div>
                <div className="flex justify-center" >
                    <h5 className="text-gray-300 md:w-[700px] text-center">Switch to Dark Mode for late-night sessions.Minimize eye strain and enhance focus, perfect for after-hours creativity bursts.</h5>
                </div>
                <div className="flex justify-center py-10" >
                    <CommonButton title={"Get started with AI"} classStyle={"bg-[#0CE4BF] rounded-xl text-sm p-3 px-5 font-semibold"} icon={true} />
                </div>
                <div className="" >
                    <img className="rounded-2xl" src="https://www.geckoboard.com/uploads/Cashflow-dashboard-example.png" />
                    <div className="my-10 grid grid-cols-12 bg-[#17484E] rounded-xl" >
                        {
                            darkProductivityData?.map(ele => <DarkProductivityCard data={ele} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DarkProductivity