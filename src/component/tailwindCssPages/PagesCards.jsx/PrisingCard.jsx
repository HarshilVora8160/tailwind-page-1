import CommonButton from "../common-components/CommonButtonComponent";
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const PrisingCard = ({ prisingData }) => {
    const { heading, content, price, duration, title, benefitsDetails } = prisingData
    // const { benefit, success } = benefitsDetails
    console.log("benefitsDetails",benefitsDetails   );
    

    return (
        <div className=" border border-gray-100 shadow rounded-xl p-5 " >
            <p className="text-xl font-semibold" >
            {heading}
            </p>
            <p className="text-sm py-5 text-gray-600" >{content}</p>
            <div className="flex" >
                <p className="text-5xl font-semibold" >{price}</p>
                <p className="flex items-end p-1 text-sm text-gray-600" >/ {duration}</p>
            </div>
            <div className="py-5" >
                <CommonButton title={title} classStyle={"bg-[#083D44] text-gray-200 font-semibold text-sm p-2 w-full rounded-md"} />
            </div>
            <div>
                {
                    benefitsDetails?.map((ele,idx) => {
                        
                        return <div className="flex gap-3">
                            <p className="py-1" >{ele.success ? <CheckCircleOutlineOutlinedIcon className="text-green-900" /> : <DangerousOutlinedIcon className="text-gray-300" />}</p>
                            <p className="py-1 text-gray-600 text-sm flex items-center" >{ele.benefit}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PrisingCard