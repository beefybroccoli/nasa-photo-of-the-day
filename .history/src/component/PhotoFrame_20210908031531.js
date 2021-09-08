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
  const [stateUserPickDate, set_stateUserPickDate] = useState(null);

  const cb_onChange = (event) => {
    //update stateUserPickDate
    set_stateUserPickDate(event.target.value);
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    //change the stateInputDate when user click "submit"
    set_stateInputDate(stateUserPickDate);
  };

  useEffect(() => {
    //set stateObject to null
    set_stateObject(null);
    //set stateLoading to true
    set_stateLoading(true);
    axios
      .get(API_URL + stateInputDate)
      .then((response) => {
        //store data from API in stateObject
        set_stateObject(response.data);
      })
      .catch((error) => {
        //store error in stateError
        set_stateError(error);
      });
  }, [stateInputDate]);

  useEffect(() => {
    //set stateLoading to false after loading completion
    stateObject && set_stateLoading(false);
  }, [stateObject]);

  const DIV_PhotoFrame = styled.div`
    border: 1px black solid;
    width: 50%;
    margin: 1%;
  `;

  return (
    <DIV_PhotoFrame>
      <form onSubmit={cb_onSubmit}>
        <input
          name={stateUserPickDate}
          value={stateUserPickDate}
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
