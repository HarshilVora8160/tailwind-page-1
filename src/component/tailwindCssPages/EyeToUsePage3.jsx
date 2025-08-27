import CommonButton from "./common-components/CommonButtonComponent"
import CommonHeading from "./common-components/CommonHeadingComponent"
import EyeToUseCard from "./PagesCards.jsx/EyeToUsePageCard"
import EyeToUseCard2 from "./PagesCards.jsx/EyeToUsePageCard2"

const EyeToUse = () => {




    const eyeUseAiEditorArr = [
        { title: "Your Ai Writing Assistent", imageContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nam obcaecati reiciendis aspernatur magni, temporibus quisquam ea ipsum repellendus corrupti maxime error, harum, veniam libero nesciunt exercitationem tempore eius suscipit repudiandae commodi quos mollitia nihil iusto quasi. Aperiam quo molestiae ipsum vel, doloribus, tempora qui unde consectetur voluptatem autem fugiat.", image: "https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-275376231.jpg", content: "Focus on what matters, as Joule AI handles the heavy lifting, turning content generation into a stress-free process." },
        { title: "Real-Time collaboration with Your Team", image: "https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-275376231.jpg", imageContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit et sunt dignissimos maiores dicta vel sequi repudiandae dolore obcaecati labore deleniti sint nisi quia illo, corporis explicabo nostrum nemo unde harum? Hic facilis natus fugit, non laboriosam, consectetur ipsa iusto obcaecati possimus quos provident id totam! Corporis quisquam id sequi.Lorem ipsum dolor sit amet consecte.", content: "Invite team members to collaboration in rea;l-time, optimizing productivity and ensuring cohesive content creation." }
    ]


    const eyeUseAiEditorArr2 = [
        { title: "Work efficiently", imageContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque itaque eum, sed fugit dicta excepturi maiores animi fuga quidem porro accusamus provident officia aliquid, suscipit, minima ipsam libero doloremque? Esse accusamus maxime voluptatum! Ratione laudantium, magnam saepe cupiditate at accusamus itaque, debitis eveniet quisquam iure fugit officia pariatur, cum quod!", image: "https://www.shutterstock.com/image-photo/texture-blurry-text-open-textbook-600nw-1175839786.jpg", content: "Generate drafts of your content in seconds and iterate on them with AI. Keeping a constant flow of ideas has naver been easier." },
        { title: "Effortless Content Expansion", imageContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque itaque eum, sed fugit dicta excepturi maiores animi fuga quidem porro accusamus provident officia aliquid, suscipit, minima ipsam libero doloremque? Esse accusamus maxime voluptatum! Ratione laudantium, magnam saepe cupiditate at accusamus itaque, debitis eveniet quisquam iure fugit officia pariatur, cum quod!", image: "https://www.shutterstock.com/image-photo/texture-blurry-text-open-textbook-600nw-1175839786.jpg", content: "Generate insightful additions to your content that much your unique tone, style, and context." },
        { title: "Let AI Work with you", imageContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque itaque eum, sed fugit dicta excepturi maiores animi fuga quidem porro accusamus provident officia aliquid, suscipit, minima ipsam libero doloremque? Esse accusamus maxime voluptatum! Ratione laudantium, magnam saepe cupiditate at accusamus itaque, debitis eveniet quisquam iure fugit officia pariatur, cum quod!", image: "https://www.shutterstock.com/image-photo/texture-blurry-text-open-textbook-600nw-1175839786.jpg", content: "Enhance your workflow and ask the AI for assistance at any time. Writekit's AI is always ready to help you with your content." }
    ]

    return (
        <div className="px-10 md:px-20 xl:px-30" >
            <h1><CommonHeading heading={"EYE TO USE"} /></h1>
            <div className="grid grid-cols-12 py-5" >
                <div className="col-span-12 xl:col-span-6 w-96" >
                    <h1 className="text-5xl font-semibold" >Integrates deeply within the editor</h1>
                </div>

                <div className="col-span-10 md:col-span-8 xl:col-span-4 flex items-end my-3 xl:my-0" >
                    <h1 className="text-gray-500" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quis non impedit cum sapiente, possimus nesciunt blanditiis officiis cupiditate commodi ducimus provident atque.</h1>
                </div>

                <div className="col-span-12 xl:col-span-2 flex items-end" >
                    <CommonButton title={"Get started with AI"} icon={true} classStyle={"bg-[#083D44] p-3 text-sm text-white px-5 rounded-xl font-semibold"} />
                </div>
            </div>
            <div className="grid md:grid-cols-12 py-5 gap-5" >
                {
                    eyeUseAiEditorArr?.map((ele, idx) => <EyeToUseCard data={ele} />)
                }
            </div>
            <div className="grid md:grid-cols-12 gap-5" >
                {
                    eyeUseAiEditorArr2?.map((ele, idx) => <EyeToUseCard2 data={ele} />)
                }
            </div>
        </div>
    )
}

export default EyeToUse