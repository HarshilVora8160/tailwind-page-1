const CardsDetails = ({ products }) => {
    const { id, title, images } = products

    return (
        <div className="flex justify-center" >
            <div className="border-2 m-2" >
                <div className="w-60 p-5 " >
                    <div className="flex justify-center" >
                        <img className="h-30" src={images.length > 1 ? images[1] : images} alt={title} />
                    </div>
                    <div className="flex justify-center" >
                        <span className="text-md text-center" >{title}</span>
                    </div>
                </div>
                {/* {ele.id} */}
            </div>
        </div>
    )
}

export default CardsDetails