const IntelligentCard = ({ data = '', bgColor }) => {
    return (
        <div className={`${!bgColor ? "bg-gray-50 p-5" : bgColor } col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 border border-gray-200 rounded-xl`} >
            <div className="bg-white p-2 w-10 rounded-md shadow" >
                {data.cardIcon}
            </div>
            <p className="py-4 font-semibold text-xl" >{data.title}</p>
            <p className="text-sm" >{data.content}</p>
        </div>
    )
}

export default IntelligentCard