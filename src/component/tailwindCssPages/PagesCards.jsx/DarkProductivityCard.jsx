const DarkProductivityCard = ({ data = '' }) => {
    return (
        <div className={`p-10 rounded-xl col-span-12 md:col-span-6 xl:col-span-4`} >
            <div className="text-white border p-2 w-fit rounded-sm" >
                {data.cardIcon}
            </div>
            <p className="py-4 font-semibold text-xl text-white" >{data.title}</p>
            <p className="text-sm text-gray-300" >{data.content}</p>
        </div>
    )
}

export default DarkProductivityCard