import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeContent from "./components/home/HomeContent";
import FoodContent from "./components/food/FoodContent";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import AdminFoodList from "./components/AdminFoodList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/food" element={<FoodContent />} />
        <Route path="/training" element={<HomeContent />} />
        <Route path="/myths" element={<HomeContent />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminHome />}></Route>
        <Route path="/adminFoodList" element={<AdminFoodList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
