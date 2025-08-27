const EyeToUseCard2 = ({ data = '' }) => {
    console.log(data);

    return (
        <div className="bg-gray-50 p-5 border border-gray-200 rounded-md md:col-span-6 xl:col-span-4" >
            <div>
                <p className="font-semibold md:text-xl" >{data.title}</p>
            </div>

            <div className="flex justify-center items-center py-5" >
                <div className="w-96" >
                    <p className="blur-[2px] text-gray-300">{data.imageContent}</p>
                </div>
                {data.image ? <img className="h-30 absolute opacity-60" src={`${data.image}`} /> : ""}
            </div>
            <div>
                <p className="text-sm text-gray-500" >{data.content}</p>
            </div>
        </div>
    )
}

export default EyeToUseCard2