import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { auth } from "../auth/auth";

const EditSpeciality = () => {

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

    const handleEditSpeciality = () => {
        console.log(specialists)
        const newSpeciality = {
            name: name,
            specialists: specialists.split(',').map((oneSpecialist) => oneSpecialist.trim()),
            floor: floor
        };

        axios.post(`${process.env.REACT_APP_API}/speciality/edit/${id}`, newSpeciality, {headers: auth()})
            .then((res) => {
                console.log(res.data)
            })
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/speciality/${id}`)
            .then((res) => {
                setName(res.data.name);                
                if (typeof res.data.specialists === 'string' || res.data.specialists instanceof String) {
                    setSpecialists(res.data.specialists);
                } else {
                    setSpecialists("");
                }    
                setFloor(res.data.floor);
            });
    }, []);


    return (
        <main className="edit-spe-card">
            <h1>Éditer une spécialité</h1>
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
            <button onClick={handleEditSpeciality}>Éditer la spécialité</button>
        </main>
    );
};

export default EditSpeciality;