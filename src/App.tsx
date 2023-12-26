import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import FoodContent from "./components/FoodContent";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import FoodListTable from "./components/FoodListTable";
import AdminMythList from "./components/AdminMythList";
import AdminRegisterFood from "./components/AdminRegisterFood";
import { AdminEditFood } from "./components/AdminEditFood";
import WhatToEat from "./components/WhatToEat";
import { useState } from "react";
import TrainingPage from "./components/TrainingPage";

type FoodProps = {
  foodId: string;
  foodName: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

interface FoodState {
  submitted: boolean;
  age: number;
  gender: string;
  weight: number;
  height: number;
  activity: string;
}

// TODO : INSERT PROPS AND STATE WHEN TAKING FROM DB

function App() {
  const [measurement, setMeasurements] = useState([
    {
      submitted: "false",
      age: 0,
      gender: "",
      weight: 0,
      height: 0,
      activity: "",
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/food" element={<FoodContent></FoodContent>} />
        <Route
          path="/whattoeat"
          element={
            <WhatToEat
              foodId="1"
              foodName="granola"
              calories={500}
              carbs={50}
              protein={50}
              fat={50}
            ></WhatToEat>
          }
        ></Route>
        <Route path="/training" element={<TrainingPage></TrainingPage>} />
        <Route path="/myths" element={<HomeContent />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminHome />}></Route>
        <Route path="/adminFoodList" element={<FoodListTable />}></Route>
        <Route path="/adminmythlist" element={<AdminMythList />}></Route>
        <Route
          path="/adminRegisterFood"
          element={<AdminRegisterFood />}
        ></Route>
        <Route path="/adminEditFood" element={<AdminEditFood />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
