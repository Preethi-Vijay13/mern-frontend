import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Appointment from '../pages/Appointment';
import Layout from '../components/Layout';
import ServiceDetail from '../pages/ServiceDetail'; // ✅

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRouter;
