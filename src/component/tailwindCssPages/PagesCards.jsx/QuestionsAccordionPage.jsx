import { useState } from "react";
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Accordion = () => {

    const quesrtionsData = [
        {
            title: "Do you offer a free trial?",
            content: "Learn variables, loops and functions in javascript.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam beatae rem, unde repellendus deserunt culpa."
        },
        {
            title: "Is VAT included in the price?",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "Can i cancel my subscription at any time?",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "Can i upgrade or dowungrade my plan any time?",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "What is i reach my monthly limit?",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "What if the available plans don't fit my needs?",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "What exactly is 'AI graduated words'?",
            content: "Learn variables, loops and functions in javascript."
        },
        {
            title: "What is 'Real time colaboration'?",
            content: "Learn variables, loops and functions in javascript."
        },
    ]

    const [openIndex, setOpenIndex] = useState(null)
    console.log("openIndex-----", openIndex);

    const toggleModeHandler = (index) => {
        setOpenIndex(index === openIndex ? null : index)
    }

    return (
        <div>
            {
                quesrtionsData?.map((ele, idx) => {
                    return (
                        <>
                            <div className="bg-gray-50 my-6 p-5 border border-gray-200 rounded-xl" >
                                <div className="flex justify-between" onClick={() => toggleModeHandler(idx)} >
                                    <h3 className=" text-xl"  >{ele.title} </h3>
                                    <p> {openIndex === idx ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}</p>
                                </div>
                                {
                                    openIndex === idx ?
                                        <h3 className="pt-5">{ele.content}</h3>
                                        : null
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Accordion