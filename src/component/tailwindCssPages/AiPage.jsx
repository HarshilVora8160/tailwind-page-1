import Navbar from "./Navbar"
import CommonButton from "./common-components/CommonButtonComponent"
import CommonTitle from "./common-components/CommonTitleComponent"
// import EastIcon from '@mui/icons-material/East';

const AiPage = () => {
  return (
    <div className="relative h-screen bg-[#083D44]" >
      <Navbar />
      <div className="h-screen flex justify-center items-center" >
        <div className="grid grid-cols-12" >
          <div className="col-span-12 md:col-span-10 xl:col-span-7 px-10 md:px-20 xl:px-30" >
            <CommonTitle title={'Write better content with an AI that learners'} classStyle={'text-white text-4xl md:text-5xl xl:text-6xl'} />
            <h5 className="text-white py-5 w-[70%]" >Streamline your content creation with Joule evolving AI assistent. From brainstorming to final drafts.</h5>
            <div className="my-5" >
              <CommonButton title={"Get Started for Free"} icon={true} classStyle={'border p-2 gap-2 text-[#083D44] bg-[#0CE4BF] px-5 rounded-xl font-semibold '} />
              <h5 className="py-5 text-[#0CE4BF] text-sm" >7-Days Free Trial. No cradit card required.</h5>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-5 hidden xl:block absolute md:bottom-0 md:right-0" >
            <img className="h-[450px] bg-[#083D44] rounded-tl-xl" src="https://cdn.dribbble.com/userupload/13172097/file/original-e876b767ecc9db4c691ccab274da2070.png?resize=1905x1429&vertical=center" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default AiPage