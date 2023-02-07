import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import ShareLayout from "./pages/SharedLayout"
import About from "./pages/About"
import Error from "./pages/Error"
import SingleCocktailPage from "./pages/SingleCocktailPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="cocktail/:id" element={<SingleCocktailPage />} />

          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
