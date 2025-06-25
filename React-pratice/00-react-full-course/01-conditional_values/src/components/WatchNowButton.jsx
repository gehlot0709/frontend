// components/WatchNowButton.js
function WatchNowButton({ age }) {
  const canWatched = () => {
    if (age >= 18) {
      return "watch now";
    }
    return "not available";
  };

  return <button>{canWatched()}</button>;
}

export default WatchNowButton;
