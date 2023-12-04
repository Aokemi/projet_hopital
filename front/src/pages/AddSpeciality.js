import React, { useState } from "react";
import axios from "axios";
import { auth } from "../auth/auth";

const AddSpeciality = () => {

    const [name, setName] = useState()
    const [specialists, setSpecialists] = useState()
    const [floor, setFloor] = useState()

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "specialists") {
            setSpecialists(e.target.value)
        } else if (e.target.name === "floor") {
            setFloor(e.target.value)
        }
    }

    const handleAddSpeciality = () => {
        console.log(specialists)
        const newSpeciality = {
            name: name,
            specialists: specialists.split(',').map((oneSpecialist) => oneSpecialist.trim()),
            floor: floor
        };

        axios.post(`${process.env.REACT_APP_API}/speciality/add`, newSpeciality, {headers: auth()})
            .then((res) => {
                console.log(res.data)
            })
    }


    return (
        <main className="add-spe-card">
            <h1>Ajouter une spécialité</h1>
            <aria-label>Nom de la spécialité:</aria-label>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <aria-label>Spécialistes séparés par des virgules:</aria-label>
            <input type="text" name="specialists" value={specialists} onChange={handleChange} />
            <select name="floor" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button onClick={handleAddSpeciality}>Ajouter la spécialité</button>
        </main>
    );
};

export default AddSpeciality;