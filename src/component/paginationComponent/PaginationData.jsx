const PaginationData = ({currentPage,setCurrentPage, noOfPages}) => {

    const handlePageChange = (n) => {
        setCurrentPage(n)
    }

    const arrowPageHandler = (data) => {
        if (data === 'previous') {
            setCurrentPage(currentPage - 1)
        } else if (data === 'next') {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="flex justify-center gap-1" >
            <button type="button" disabled={currentPage === 0} className="flex items-center px-2 text-2xl hover:cursor-pointer" onClick={() => arrowPageHandler('previous')} >◀️</button>
            {/* <button type="button" disabled>Click Me!</button> */}
            {[...Array(noOfPages).keys()].map((n) => (
                <button className={"bg-gray-100 py-3 px-4 border hover:cursor-pointer" + (n === currentPage ? " bg-gray-400 text-white" : " ")} onClick={() => handlePageChange(n)} key={n} >{n}</button>
            ))}
            <button type="button" disabled={currentPage === noOfPages - 1} className="flex items-center px-2 text-2xl hover:cursor-pointer" onClick={() => arrowPageHandler('next')} >▶️</button>
        </div>
    )
}

export default PaginationData