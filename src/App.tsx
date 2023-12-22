import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeContent from "./components/home/HomeContent";
import FoodContent from "./components/food/FoodContent";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import FoodListTable from "./components/FoodListTable";
import AdminMythList from "./components/AdminMythList";

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
        <Route path="/adminFoodList" element={<FoodListTable />}></Route>
        <Route path="/adminmythlist" element={<AdminMythList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
