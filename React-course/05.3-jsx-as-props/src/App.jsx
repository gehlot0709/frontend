import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card
        title="Jsx use as props"
        description="This card component accepts JSX as a prop."
        footer={
          <button onClick={() => alert("Button Clicked!")}>Click Me</button>
        }
      >
        <p>
          This is the main content of the card. You can pass any JSX as
          children.
        </p>
      </Card>
    </div>
  );
}

export default App;
