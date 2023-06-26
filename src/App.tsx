import { Login } from "./pages/login";
import { Route, Routes } from "react-router-dom";
import { Internal } from "./pages/internal";
import "./assets/css/main.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/internal" element={<Internal />} />
      </Routes>
    </div>
  );
}

export default App;
