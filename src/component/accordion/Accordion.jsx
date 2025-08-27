import { useState } from "react"
import { FiChevronUp } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";


const Accordion = () => {

    const [openIndex, setOpenIndex] = useState('')

    const items = [
        {
            title: "Javascript Basic",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "ReactJs Overview",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "NodeJs Basic",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "Full-Stack Development",
            content: "Learn variables, loops and functions in javascript."
        },
    ]

    const toggleHandle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return !items || (items.length === 0) ? "Items not available" : (
        <div className="flex justify-center" >
            <div className="bg-gray-100 border border-gray-300 p-5 rounded-sm" >
                {
                    items?.map((ele, idx) => {
                        return (
                            <>
                                <div className="py-1 w-[400px]" >
                                    <div className="bg-gray-200 duration-300 hover:bg-gray-300 p-2 rounded-t-md border border-gray-200 flex justify-between">
                                        <button className="flex items-center"><span className="font-semibold px-2" onClick={() => toggleHandle(idx)} >{ele.title}</span>
                                        </button>
                                        <div className="flex items-center" >
                                            {
                                                openIndex === idx ? <FiChevronUp className="float-right" /> : <HiChevronDown className="float-right" />
                                            }
                                        </div>

                                    </div>
                                    {openIndex === idx && <div className="bg-gray-100 p-2 rounded-b-md border border-gray-300" >
                                        <span className="text-sm px-2" >
                                            {ele.content}
                                        </span>
                                    </div>}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion