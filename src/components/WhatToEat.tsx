import "../style.css";
import { Link, useNavigate } from "react-router-dom";

function WhatToEat() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div>
            <a onClick={() => navigate(-1)} className="title-9-what-to-eat">
              ⬅️Back to Food
            </a>
          </div>
          <div className="text-wrapper-title">Weight Loss Meal Plan</div>
          <p className="title-13-what-to-eat">
            Here is an example of a weight loss meal plan for 1700 calories for
            Abby.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="what-to-eat-list">
            <div className="row">
              <div className="article-what-to-eat">
                <div className="frame">
                  <div className="title-3">Breakfast</div>
                  <p className="subtitle-what-to-eat">445kcal</p>
                  <ul className="list-what-to-eat">
                    <li className="div-desc-what-to-eat">
                      Scrambled egg (200g) 298kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Whole wheat bread (50g) 131kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Saus sambal ABC (20g) 62kkal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article-what-to-eat">
                <div className="frame">
                  <div className="title-3">Lunch</div>
                  <p className="subtitle-what-to-eat">383kcal</p>
                  <ul className="list-what-to-eat">
                    <li className="div-desc-what-to-eat">
                      White rice, cooked (100g) 130kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Grilled chicken breast (100g) 131kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Stir fry bokchoy (little bit of oil) (50g) 102kkal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article-what-to-eat">
                <div className="frame">
                  <div className="title-3">Dinner</div>
                  <p className="subtitle-what-to-eat">532kcal</p>
                  <ul>
                    <li className="div-desc-what-to-eat">
                      White rice, cooked (100g) 130kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      White fish fillet, raw (150g) 258kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Stir fry broccoli (little bit of oil) (85g) 144kkal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article-what-to-eat">
                <div className="frame">
                  <div className="title-3">Snacks</div>
                  <p className="subtitle-what-to-eat">345kcal</p>
                  <ul>
                    <li className="div-desc-what-to-eat">
                      Papaya (200g) 86kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Whey protein powder (30g) 120kcal
                    </li>
                    <li className="div-desc-what-to-eat">
                      Granola (30g) 139kcal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-footer">HelpAbby © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default WhatToEat;
