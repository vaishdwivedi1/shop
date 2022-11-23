import "./App.css";
import Home1 from "./components/Home1";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
