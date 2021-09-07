import React from "react";
import "./App.css";
import PhotoFrame from "./component/PhotoFrame";
import { cb_get_today_date_string } from "./component/constant";
import styled from "styled-components";

export default function App() {
  const DIV_Flex = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <div className="App">
      <p>
        NASA Photo of the Day
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <DIV_Flex>
        <PhotoFrame input_date={cb_get_today_date_string()} />
        <PhotoFrame input_date={cb_get_today_date_string()} />
      </DIV_Flex>
    </div>
  );
}
