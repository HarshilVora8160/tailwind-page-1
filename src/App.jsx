import AiPage from "./component/tailwindCssPages/AiPage"
import Intelligent from "./component/tailwindCssPages/IntelligentPage2"
import EyeToUse from "./component/tailwindCssPages/EyeToUsePage3"
import DarkProductivity from "./component/tailwindCssPages/DarkProductivityPage4"
import AudiencePage from "./component/tailwindCssPages/AudiencePage"
import Prising from "./component/tailwindCssPages/PrisingPage"
import FrequentlyAskedQuestionsPage from "./component/tailwindCssPages/QuestionsPage"
import Footer from "./component/tailwindCssPages/Footer"

function App() {
  return (
    <div>
      {/* <Pagination /> */}
      {/* <InputFieldTask /> */}
      {/* <Accordion /> */}
      <AiPage />
      <Intelligent />
      <EyeToUse />
      <DarkProductivity />
      <AudiencePage />
      <Prising />
      <FrequentlyAskedQuestionsPage />
      <Footer />
    </div>
  )
}

export default App
