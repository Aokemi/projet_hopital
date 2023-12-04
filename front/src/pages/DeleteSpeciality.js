import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../auth/auth";

const DeleteSpeciality = () => {

  const [name, setName] = useState()
  const [specialists, setSpecialists] = useState()
  const [floor, setFloor] = useState()
  const { id } = useParams()

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value)
    } else if (e.target.name === "specialists") {
      setSpecialists(e.target.value)
    } else if (e.target.name === "floor") {
      setFloor(e.target.value)
    }
  }

  const handleDeleteSpeciality = () => {
    
    axios.delete(`${process.env.REACT_APP_API}/speciality/delete/${id}`, {headers: auth()})
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/speciality/${id}`)
      .then((res) => {
        console.log(res.data)
                setName(res.data.name)
                setSpecialists(res.data.specialists)
                setFloor(res.data.floor)
      })
  }, [])


  return (
    <main>
      <h1>Supprimer une spécialité</h1>
      <aria-label>Nom de la spécialité:</aria-label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <aria-label>Spécialistes séparés par des virgules:</aria-label>
      <input type="text" name="specialists" value={specialists} onChange={handleChange} />
      <select name="floor" onChange={handleChange}>
        <option value={floor}>Etage: {floor}</option>
      </select>
      <button onClick={handleDeleteSpeciality}>Supprimer la spécialité</button>
    </main>
  );
};

export default DeleteSpeciality;
