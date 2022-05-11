import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="app">
          <h1>SpaceX Launch Programs</h1>
          <div className="container">
            <Sidebar />
            <Dashboard />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
