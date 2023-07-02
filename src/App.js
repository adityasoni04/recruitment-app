import React from 'react';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import './App.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import "./style.scss";
import Inside from './pages/Inside';

function App() {

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const userAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        console.log(currentUser);

      }
      else {
        setCurrentUser("");

      }
    });
    return () => {
      userAuth();
    };
  }, [currentUser])
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='inside' element={<Inside currentUser={currentUser}/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
