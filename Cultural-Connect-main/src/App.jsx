import { Routes, Route } from "react-router-dom"
import Translate from "./components/Translate"
import Quiz from "./components/Quiz"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" exact element={<Translate />} />
        <Route path="/quiz" exact element={<Quiz />} />
      </Routes>

    </>
  )
}

export default App