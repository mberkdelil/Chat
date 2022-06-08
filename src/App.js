import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import SidePanel from "./components/SidePanel/SidePanel";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatpanel/:username" element={<SidePanel />} />
      </Routes>
    </div>
  );
}

export default App;
