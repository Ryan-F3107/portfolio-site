import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/> {/* //everything not defined a path would direct to this 404 page*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
