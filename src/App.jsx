import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import MileStone1 from "./pages/MileStone1"
import MileStone2 from "./pages/MileStone2"
import MileStone3 from "./pages/MileStone3"
import Home from "./pages/Home"
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/milestone1" element={<MileStone1 />} />
          <Route path="/milestone2" element={<MileStone2 />} />
          <Route path="/milestone3" element={<MileStone3 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
