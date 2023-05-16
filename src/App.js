import "./styles.css";
import HeaderComponent from "./components/header-component";
import FooterComponent from "./components/footer-component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import BreedsPage from "./pages/breeds-page";
import SobrePage from "./pages/sobre-page";

export default function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<SobrePage />} />
          <Route path="/breeds" element={<BreedsPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
