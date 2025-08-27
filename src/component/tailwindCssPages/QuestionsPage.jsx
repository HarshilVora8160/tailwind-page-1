import CommonHeading from "./common-components/CommonHeadingComponent"
import CommonTitle from "./common-components/CommonTitleComponent"
import QuestionAccordion from "./PagesCards.jsx/QuestionsAccordionPage"

const FrequentlyAskedQuestionsPage = () => {

    return (
        <div className="px-10 md:px-20 xl:px-30 grid grid-cols-1 lg:grid-cols-2 py-10" >
            <div className="col" >
                <CommonHeading heading={"FREQUENTLY ASKED QUESTIONS"} />    
                <CommonTitle title={"Questions? We've got answers."} classStyle={"text-5xl py-5"} />
                <p className="w-[400px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, et?</p>
            </div>
            <div >
                <QuestionAccordion />
            </div>
            </div>
    )
}

export default FrequentlyAskedQuestionsPage