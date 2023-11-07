import { Routes, Route } from "react-router-dom";
import Description from "../pages/Description/Description";
import Home from "../pages/Home/Home";
import Header from "./header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:name/:pokemonId" element={<Description />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
