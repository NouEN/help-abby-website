import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import MythPage from "./components/MythPage";
import PropTypes, { string } from "prop-types";
import HelloWorld from "./components/HellowWorld";
import axios from "axios";
import NutritionalValuePage from "./components/NutritionalValuePage";

type FoodProps = {
  foodId: string;
  foodName: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

type MythProps = {
  mythId: string;
  mythDesc: string;
  factDesc: string;
  source: string;
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
  axios.defaults.baseURL = "http://127.0.0.1:8000";
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
        <Route
          path="/myths"
          element={
            <MythPage
              mythId="1"
              mythDesc="You need to exercise for hours each day to stay in shape"
              factDesc="You can achieve significant health benefits from just 30 minutes of exercise per day"
              source="google.com"
            ></MythPage>
          }
        />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminHome />}></Route>
        <Route path="/adminFoodList" element={<FoodListTable />}></Route>
        <Route path="/adminmythlist" element={<AdminMythList />}></Route>
        <Route
          path="/adminRegisterFood"
          element={<AdminRegisterFood />}
        ></Route>
        <Route path="/adminEditFood" element={<AdminEditFood />}></Route>
        <Route
          path="/foodlist"
          element={<NutritionalValuePage></NutritionalValuePage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

App.propTypes = {
  mythId: string,
  mythDesc: string,
  factDesc: string,
  source: string,
};

export default App;
