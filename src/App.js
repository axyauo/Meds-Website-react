import "./App.css";
import Body from "./Components/Body/Body";
import Navigationbar from "./Components/Navigation/Navigationbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Post1 from "./Components/Pages/Post/Post1";
import Blog from "./Components/Pages/Blog/Blog";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Shop from "./Components/Pages/Shop/Shop";
import Faqs from "./Components/Pages/Faqs/Faqs";
import BuyAdderallOnline from "./Components/Body/CategoryPages/BuyAdderallOnline/BuyAdderallOnline";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post1" element={<Post1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/buy-adderall-online" element={<BuyAdderallOnline />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
