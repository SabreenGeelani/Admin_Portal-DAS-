// import Outlet from "./Outlet/Outlet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import PtmManagement from "./Pages/PtmManagement";
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ptm-management" element={<PtmManagement />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
