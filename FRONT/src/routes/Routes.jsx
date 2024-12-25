import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login.component';
import Register from '../components/Register.component';
import ListUsers from '../components/ListUsers';
import Home from '../components/Home';
import UserProfile from '../components/UserProfile';
const AppRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/listUsers" element={<ListUsers />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  </div>
  );
};

export default AppRoutes;
