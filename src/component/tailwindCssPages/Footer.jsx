import CommonButton from "./common-components/CommonButtonComponent"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className="bg-[#083D44] p-10 md:p-20" >
            <div className="grid grid-cols-12" >
                <div className="col-span-10 sm:col-span-8 md:col-span-10 lg:col-span-6 xl:col-span-7 lg:w-[500px] flex items-center" >
                    <p className="text-white text-5xl " >Double your Productivity, Today</p>
                </div>
                <div className="col-span-10 sm:col-span-8 md:col-span-10 lg:col-span-6 xl:col-span-5 lg:w-[500px] mt-5 lg:mt-0" >
                    <p className=" text-gray-300 pb-5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nulla in quas iure deserunt molestias excepturi perferendis. Reprehenderit, ad?</p>
                    <CommonButton title={"Get Productivity Today"} icon={true} classStyle={"bg-[#0CE4BF] p-3 text-sm font-semibold rounded-xl px-5"} />
                </div>
                <div className="p-[0.2px] w-full bg-gray-500 col-span-12 mt-10 lg:mt-20 mb-10" ></div>
            </div>
            <div className="grid grid-cols-12 text-gray-300" >
                <div className="col-span-4 lg:flex gap-3" >
                    <li className="list-none" >Policy Bazar</li>
                    <li>Terms</li>
                    <li>Disclaimer</li>
                </div>
                <div className="flex justify-center col-span-4 gap-5" >
                    <p><TwitterIcon /></p>
                    <p><GitHubIcon /></p>
                    <p><LinkedInIcon /></p>
                    <i className="fa-brands fa-discord text-white" ></i>
                </div>
                <div className="flex justify-end col-span-4" >
                    <h4>By Scriptly</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer