import React from "react";
import styled from "styled-components";
/**
 * create a photo component using input_object
 * @param {copyright, date, explanation, hdurl, title, url} props.input_object
 * @returns Photo component
 */
export default function Photo(props) {
  const { copyright, date, explanation, hdurl, title } =
    props.input_object;

  const DivPhoto = styled.div``;

  const Img = styled.img`
    width: 100%;
    height: 50vh;
  `;

  const Span_Label = styled.span`
    font-style: italic bold;
    background-color: grey;
  `;

  return (
    <DivPhoto>
      <p>
        <Span_Label>Title: </Span_Label>
        {title}
      </p>
      <p>
        <Span_Label>Date: </Span_Label>
        {date}
      </p>
      <picture>
        <Img src={hdurl} alt={explanation} />
      </picture>
      <p>
        <Span_Label>explanation : </Span_Label>
        {explanation}
      </p>
      <p>
        <Span_Label>Copyright - </Span_Label>
        {copyright}
      </p>
      <p>
        <Span_Label>Sourec : </Span_Label> https://apod.nasa.gov
      </p>
    </DivPhoto>
  );
}

/*
{
    "copyright": "Balint Lengyel",
    "date": "2021-08-20",
    "explanation": "Frames from a camera that spent three moonless nights under the stars create this composite night skyscape. They were recorded during August 11-13 while planet Earth was sweeping through the dusty trail of comet Swift-Tuttle. One long exposure, untracked for the foreground, and the many star tracking captures of Perseid shower meteors were taken from the village of Magyaregres, Hungary. Each aligned against the background stars, the meteor trails all point back to the annual shower's radiant in the constellation Perseus heroically standing above this rural horizon. Of course the comet dust particles are traveling along trajectories parallel to each other. The radiant effect is due only to perspective, as the parallel tracks appear to converge in the distance against the starry sky.   Notable APOD Image Submissions: Perseid Meteor Shower 2021",
    "hdurl": "https://apod.nasa.gov/apod/image/2108/ThreeNightsPerseids3000.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Three Perseid Nights",
    "url": "https://apod.nasa.gov/apod/image/2108/ThreeNightsPerseids1024.jpg"
}
*/
