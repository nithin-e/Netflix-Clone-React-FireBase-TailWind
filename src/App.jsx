import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Navbar from './Component/Navbar';
import { FirebaseContext } from '../src/Firebase/FirebaseContext';
import { firebaseApp } from '../src/util/FirebaseConfic';
import ProtectedRoute from './Component/protectedRoute';

const App = () => {
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </FirebaseContext.Provider>
  );
};

export default App;
