// import Outlet from "./Outlet/Outlet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import PtmManagement from "./Pages/PtmManagement";
import ManageAppointments from "./Pages/ManageAppointments";
import UserManagement from "./Pages/UserManagement";
import ClassManagement from "./Pages/ClassManagement";
import LocationManagement from "./Pages/LocationManagement";
import Notifications from "./Pages/Notifications";
import Settings from "./Pages/Settings";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ptm-management" element={<PtmManagement />} />
          <Route path="/manage-appointments" element={<ManageAppointments />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/class-management" element={<ClassManagement />} />
          <Route path="/location-management" element={<LocationManagement />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
