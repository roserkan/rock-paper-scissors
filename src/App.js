import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Play from "./components/Play/Play";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/play" element={<Play />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
