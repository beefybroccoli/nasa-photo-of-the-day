import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./constant";
import Photo from "./Photo";
import styled from "styled-components";

export default function PhotoFrame(props) {
  const [stateInputDate, set_stateInputDate] = useState(props.input_date);
  const [stateError, set_stateError] = useState(null);
  const [stateObject, set_stateObject] = useState(null);
  const [stateLoading, set_stateLoading] = useState(null);
  const [user_pick_date, set_user_pick_date] = useState(null);

  const cb_onChange = (event) => {
    set_user_pick_date(event.target.value);
    console.log("user_pick_date = ", user_pick_date);
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    set_stateInputDate(user_pick_date);
  };

  useEffect(() => {
    set_stateObject(null);
    set_stateLoading(true);
    axios
      .get(API_URL + stateInputDate)
      .then((response) => {
        // console.log("response.data = ", response.data);
        set_stateObject(response.data);
      })
      .catch((error) => {
        set_stateError(error);
      });
  }, [stateInputDate]);

  useEffect(() => {
    // console.log("stateObject = ", stateObject);
    stateObject && set_stateLoading(false);
  }, [stateObject]);

  const DIV_PhotoFrame = styled.div`
    border: 1px black solid;
    width: 90%;
    margin: 5%;
  `;

  return (
    <DIV_PhotoFrame>
      <form onSubmit={cb_onSubmit}>
        <input
          name={user_pick_date}
          value={user_pick_date}
          onChange={cb_onChange}
          type="date"
          min="2000-01-01"
          max={props.input_date}
        />
        <button>Submit</button>
      </form>
      <p>Photo of the day</p>
      <p>{stateLoading && "Loading... Please wait"}</p>
      <p>{stateError && "Error Occured... Please try again"}</p>
      {stateObject && <Photo input_object={stateObject} />}
    </DIV_PhotoFrame>
  );
}
