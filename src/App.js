import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import ShareLayout from "./pages/SharedLayout"
import About from "./pages/About"
import Error from "./pages/Error"
import Loading from "./components/Loading"
import { useGlobalContext } from "./context"
function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (!loading) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
