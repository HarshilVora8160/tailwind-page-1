import { useEffect, useState } from "react";
import CardsDetails from "./CardsDetails";
import PaginationData from "./PaginationData";

const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const PAGE_SIZE = 10;

    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE)
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products')
        const json = await data.json();
        setProducts(json.products)
    }

    return !products?.length ? <h1>Products not found</h1> : (
        <div>
            <div className="flex justify-center" >
                <h1 className="text-5xl py-10" >Products Page</h1>
            </div>
            <PaginationData currentPage={currentPage} setCurrentPage={setCurrentPage} noOfPages={noOfPages} />
            {/* flex wrap is i using first time */}
            <div className="flex flex-wrap justify-center" >
                {
                    products?.slice(start, end).map((ele) =>
                        <CardsDetails products={ele} key={ele.id} />
                    )
                }
            </div>
        </div>
    )
}

export default Pagination;