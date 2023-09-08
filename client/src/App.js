import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./views/HomePage";
import GalleryPage from "./views/GalleryPage";
import LocationPage from "./views/LocationPage";
import MenuPage from "./views/MenuPage";
import Navbar from "./component/navbar";
import ResponsiveAppBar from './component/navbar2';

function App() {
  return (
    <div className="bg-secondary container-mt5">
    <Navbar />
    {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/location" element={<LocationPage />}></Route>
      </Routes>
      <footer class="fixed-bottom" >All Rights reserved</footer>
    </div>
  );
}

export default App;
