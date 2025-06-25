// App.js
import "./App.css";
import AvailabilityButton from "./components/AvailabilityButton.jsx";
import WatchStatus from "./components/WatchStatus.jsx";
import WatchNowButton from "./components/WatchNowButton.jsx/";

function App() {
  const name = "queen of Tears";
  const rating = "8.2";
  const summary = "this is best movie in india";
  const age = 19;
  const returnGenre = () => {
    const genre = "Romco";
    return genre;
  };

  return (
    <>
      <div>
        <h3>Name: {name}</h3>
        <h3>Rating: {rating}</h3>
        <p>Summary: {summary}</p>
        <p>Genre: {returnGenre()}</p>

        {/* 1. Conditional rendering using ternary */}
        <AvailabilityButton age={age} />

        <br /><br />

        {/* 2. Using let + if-else */}
        <WatchStatus age={age} />

        <br /><br />

        {/* 3. Conditional return from function */}
        <WatchNowButton age={age} />
      </div>
    </>
  );
}

export default App;
