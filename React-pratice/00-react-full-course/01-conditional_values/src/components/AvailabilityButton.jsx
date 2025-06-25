// components/AvailabilityButton.js
function AvailabilityButton({ age }) {
  return <button>{age >= 18 ? "available" : "not available"}</button>;
}

export default AvailabilityButton;
