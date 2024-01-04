import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContent from "./components/HomeContent";
import FoodContent from "./components/FoodContent";
import WhatToEat from "./components/WhatToEat";
import { useState } from "react";
import TrainingPage from "./components/TrainingPage";
import MythPage from "./components/MythPage";
import PropTypes, { string } from "prop-types";
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

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:8000";

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
        <Route path="/myths" element={<MythPage></MythPage>} />
        <Route
          path="/food/foodlist"
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
