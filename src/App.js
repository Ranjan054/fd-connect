// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Homepage from './component/Homepage/Homepage';
import ProtectedRoutes from './ProtectedRoutes'
// import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import DoctorManagement from './component/DoctorManagement/DoctorManagement';
import StudentManagement from './component/StudentManagement/StudentManagement';
import ClassManagement from './component/ClassManagement/ClassManagement';
import ChangePassword from './component/ChangePassword/ChangePassword';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} >
          <Route index element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          <Route path="dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          <Route path="doctor-management" element={<ProtectedRoutes><DoctorManagement /></ProtectedRoutes>} />
          <Route path="student-management" element={<ProtectedRoutes><StudentManagement /></ProtectedRoutes>} />
          <Route path="class-management" element={<ProtectedRoutes><ClassManagement /></ProtectedRoutes>} />
          <Route path="change-pasword" element={<ProtectedRoutes><ChangePassword /></ProtectedRoutes>} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
