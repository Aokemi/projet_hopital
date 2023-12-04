import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Carte from "./pages/Carte";
import Speciality from "./pages/Speciality";
import AddSpeciality from "./pages/AddSpeciality";
import EditSpeciality from "./pages/EditSpeciality";
import DeleteSpeciality from "./pages/DeleteSpeciality";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";

const App = () => {

  const [admin, setAdmin] = useState(false)
  const [isOnline, setIsOnline] = useState(false)

  useEffect(()=>{

    const getCurrentUser = JSON.parse(localStorage.getItem("User")) || []

    if(!getCurrentUser){
      setAdmin(false)
      setIsOnline(false)
      return
  }

    if(getCurrentUser.role === "Admin"){
      setAdmin(true)
      setIsOnline(true)
    } else if(getCurrentUser.role === "User"){
      setAdmin(false)
      setIsOnline(true)
    }
  }, [admin, isOnline])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/error" element={<Navigate to="/" />} />
      <Route path="/speciality" element={<Speciality />} />

      {admin && (
        <>
        <Route path="/speciality/add" element={<AddSpeciality />} />
        <Route path="/speciality/edit/:id" element={<EditSpeciality />} />
        <Route path="/speciality/delete/:id" element={<DeleteSpeciality />} />
        </>
      )}

      {isOnline && (
        <>
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />
        </>
      )}

      
      <Route path="/map" element={<Carte />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
