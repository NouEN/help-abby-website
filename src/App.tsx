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
import ReactSound from "react-sound";

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:8000";

  return (
    <div>
      <ReactSound
        url="src/assets/sounds/Almond-Chocolate.mp3"
        playStatus={"PLAYING"}
        volume={100}
        autoLoad={true}
        loop={true}
      ></ReactSound>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/food" element={<FoodContent></FoodContent>} />
          <Route path="/whattoeat" element={<WhatToEat></WhatToEat>}></Route>
          <Route path="/training" element={<TrainingPage></TrainingPage>} />
          <Route path="/myths" element={<MythPage></MythPage>} />
          <Route
            path="/food/foodlist"
            element={<NutritionalValuePage></NutritionalValuePage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
