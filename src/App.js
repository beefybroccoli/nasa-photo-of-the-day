import React from "react";
import "./App.css";
import PhotoFrame from "./component/PhotoFrame";
import { cb_get_today_date_string } from "./component/constant";

export default function App() {
  // const sample_date = "2021-08-20";

  console.log("cb_get_today_date_string() return", cb_get_today_date_string());
  return (
    <div className="App">
      <p>
        NASA Photo of the Day
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>

      <PhotoFrame input_date={cb_get_today_date_string()} />
    </div>
  );
}
