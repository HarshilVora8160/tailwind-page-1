import CommonButton from "./common-components/CommonButtonComponent"
import CommonHeading from "./common-components/CommonHeadingComponent"
import CommonTitle from "./common-components/CommonTitleComponent"

const AudiencePage = () => {
    return (
        <div className="px-10 md:px-20 lg:px-30 grid grid-cols-12" >
            <div className="col-span-12 lg:col-span-6">
                <CommonHeading heading={"KNOWS YOUR AUDIENCE"} />
                <div className="py-5  whitespace-pre-line" >
                    <p class="whitespace-pre-line">
                        This is a paragraph with a line break.
                        It will break at spaces and newlines.
                    </p>
                    <CommonTitle title={"Endless content ideas,for your audience"} classStyle={"text-5xl font-semibold"} />
                </div>
                <p className="w-[450px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloribus veniam cupiditate .</p>
                <div className="py-10" >
                    <CommonButton title={"Get started for Free"} classStyle={"bg-[#083D44] p-2 text-white rounded-xl px-5"} icon={true} />
                </div>
            </div>
            <div className="bg-gray-50 col-span-12 lg:col-span-6 rounded-xl border-2 border-gray-100" >
                <div className="p-8 " >
                    <div className="flex justify-end" >
                        <CommonButton title={"Give me 3 content suggestions to introduce Joule"} classStyle={"bg-[#083D44] p-2 text-white text-sm rounded-md px-5 pr-10"} />
                    </div>
                    <div className="bg-white border-2 border-gray-100 p-2 my-5 rounded-md" >
                        <p className="text-sm" >Sure, here are 3 content suggestion:</p>
                        <div className="p-2 lg:p-5 pb-0 text-[12px]" >
                            <p className="py-1">Overcome Writer's Block and Boost Productivity with Writekit's intelligent</p>
                            <p>Discover the Magic of Generative AI in Creating Engaging Content with</p>
                        </div>
                    </div>
                    <div className="flex justify-end" >
                        <CommonButton title={"Thank you!"} classStyle={"bg-[#083D44] p-2 text-sm text-white rounded-md px-5"} />
                    </div>
                    <div>
                        <CommonButton title={"You are welcome!"} classStyle={"border-2 border-gray-100 bg-white p-2 text-sm rounded-md px-5"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudiencePage