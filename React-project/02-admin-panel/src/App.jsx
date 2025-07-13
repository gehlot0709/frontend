import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="relative">
      <Header />
      <Sidebar />
      <main className="md:ml-20 pt-24">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
