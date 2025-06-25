// components/WatchStatus.js
function WatchStatus({ age }) {
  let canWatch = "unWatch";
  if (age >= 18) {
    canWatch = "watch";
  }
  return <button>{canWatch}</button>;
}

export default WatchStatus;

