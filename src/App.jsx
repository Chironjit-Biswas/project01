import {Navbar} from "./components/Navbar.jsx";
import {Home} from "./components/Home.jsx";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Pages} from "./components/Pages.jsx";
import {Support} from "./components/Support.jsx";
import {Contact} from "./components/Contact.jsx";


function App() {


  return (
    <>
        <BrowserRouter>
            <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
