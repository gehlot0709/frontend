import { useState } from "react";
import "./App.css";
import seriesData from "./api/series.json";
function App() {
  return (
    <>
      <ul>
        {seriesData.map((current) => {
          return (
            <li key={current.id}>
              <img src={current.img_url} alt="" />
              <h2>{current.name}</h2>
              <p>Rating: {current.rating}</p>
              <p>{current.id}</p>
              <p>Cast: {current.cast}</p>
              <p>Genre: {current.genre}</p>
              <p>summary : {current.description}</p>
              <a href={current.watch_url} target="_blank" rel="noreferrer">
                Watch Now
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
