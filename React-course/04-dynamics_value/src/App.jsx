import "./App.css";
import Card from "./components/Card";

function App() {
  const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUD7v93n7g0Rh6cMNk4u22rvzhfxyc9CkvA&s";
  const img2 = "https://theiphonejunction.com/cdn/shop/files/IMG-6212.jpg?v=1741172118";
  const img3= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTTJOcGGGVhcaK1E1V9IO8HXw5k3rcz4U3Q&s"
  const price1 = 120000
  const price2 = 56000
  const price3 = 66000
  const price4 = 77000
  return (
    <>
      <section className="card">
        <div className="container">
          <div className="row">
            <Card img={img1} price={price1}/>
            <Card img={img2} price={price2}/>
             <Card img={img3} price={price3} />
            <Card img={img2} price={price4}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;