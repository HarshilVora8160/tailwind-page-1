import { useState } from "react";

const InputFieldTask = () => {

    const [data, setData] = useState("")

    const [dataArr, setDataArr] = useState([])

    const handleKeyDown = (e) => {
        // console.log("e.key------------",e.key);
        if (e.key === "Enter" && data.trim() !== '') {
            setDataArr(prev => [...prev, data])
            setData('')
        }
    }

    const itemDeleteHandler = (idx) => {
        // this time i not use a filter javascript method i used splice method
        const copyDataArr = [...dataArr]
        copyDataArr.splice(idx, 1)
        setDataArr(copyDataArr)
    }

    return (
        <div className="flex justify-center" >
            <div className="my-10" >
                <div className="flex justify-center mb-3" >
                    <h2 className="text-2xl" >Chips Input</h2>
                </div>
                <div className="flex justify-center" >
                    <input type="text" className=" w-72 p-2 border-2 border-gray-400 rounded-sm" placeholder="type your text and press enter..." value={data} onChange={(e) => setData(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)} />
                </div>
                <div className="flex justify-center" >
                    {
                        dataArr?.map((ele, idx) => {
                            return (
                                <h1 className="bg-gray-300 py-1 m-2 px-3 flex-wrap" key={idx} >
                                    {ele} 
                                    <button className="text-red-600 mx-1 bg-gray-100 px-2" onClick={()=>itemDeleteHandler(idx)} >X</button>
                                </h1>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InputFieldTask