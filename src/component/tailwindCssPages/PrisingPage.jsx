import CommonButton from "./common-components/CommonButtonComponent"
import CommonHeading from "./common-components/CommonHeadingComponent"
import CommonTitle from "./common-components/CommonTitleComponent"
import PrisingCard from "./PagesCards.jsx/PrisingCard"

const Prising = () => {

    const prisingCardsData = [
        { heading: "Creator", content: "Perfect for individual creators, offering affordable access to generative AI", price: "$19", duration: "month", title: "Start Free 7-day Trial", benefitsDetails: [{ benefit: "AI-Powered content creation", success: true }, { benefit: "AI Chat research assistent", success: true }, { benefit: "20+ languages supported", success: true }, { benefit: "Unlimited documents", success: true }, { benefit: "1 user", success: true }, { benefit: "Realtime content collaboration", success: false }, { benefit: "Shared connect library", success: false }, { benefit: "High Priority support", success: false }] },
        { heading: "Teams", content: "Perfect for individual creators, offering affordable access to generative AI", price: "$29", duration: "month", title: "Start Free 7-day Trial", benefitsDetails: [{ benefit: "AI-Powered content creation", success: true }, { benefit: "AI Chat research assistent", success: true }, { benefit: "20+ languages supported", success: true }, { benefit: "Unlimited documents", success: true }, { benefit: "1 user", success: true }, { benefit: "Realtime content collaboration", success: false }, { benefit: "Shared connect library", success: false }, { benefit: "High Priority support", success: false }] },
        { heading: "Studio", content: "Meximize team efficiency with realtime collaboration and increased limited.", price: "$39", duration: "month", title: "Start Free 7-day Trial", benefitsDetails: [{ benefit: "AI-Powered content creation", success: true }, { benefit: "AI Chat research assistent", success: true }, { benefit: "20+ languages supported", success: true }, { benefit: "Unlimited documents", success: true }, { benefit: "5 user", success: true }, { benefit: "Realtime content collaboration", success: true }, { benefit: "Shared connect library", success: true }, { benefit: "High Priority support", success: true }] },
    ]

    console.log("prisingCardsData-------", prisingCardsData);

    return (
        <div className="px-10 md:px-20 lg:px-30 py-50" >
            <div className="flex justify-center" >
                <CommonHeading heading={"PRISING PLANS"} />
            </div>
            <div className="flex justify-center text-center py-5" >
                <CommonTitle title={"Transform your writing with Scriptly AI"} classStyle={"text-5xl font-semibold"} />
            </div>
            <div className="flex justify-center" >
                <p className="w-[500px] text-center text-gray-500" >Start using Scriptly today and enhance your writing process with innovative tools and endless inspiration.</p>
            </div>
            <div className="flex justify-center md:justify-normal" >

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10 w-[400px] md:w-full" >
                    {
                        prisingCardsData?.map(ele => <PrisingCard prisingData={ele} />)
                    }
                </div>
            </div>
            <div className="grid grid-cols-12 bg-[#083D44] p-10 rounded-xl" >
                <div className="col-span-12 md:col-span-6 xl:col-span-5" >
                    <h2 className="text-white text-4xl" >Need a custom plan?</h2>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-5 py-5 md:py-0" >
                    <p className="text-sm text-gray-300 md:px-5" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quas nulla aliquam vel maiores? Cupiditate Lorem.</p>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-2 mt-5 xl:mt-0" >
                    <CommonButton title={"Contact Sales"} classStyle={"text-sm text-[#083D44] bg-[#0CE4BF] p-2 px-5 font-semibold rounded-md"} />
                </div>
            </div>
        </div>
    )
}

export default Prising