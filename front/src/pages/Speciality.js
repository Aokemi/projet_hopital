import React, { useEffect, useState } from 'react';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import { auth } from '../auth/auth';

const Speciality = () => {

    const [specialities, setSpecialities] = useState([])
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

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/speciality`)
            .then((res) => {
                setSpecialities(res.data)
            })
    }, [])

    const handleDeleteSpeciality = (deleteId) => {
    
        axios.delete(`${process.env.REACT_APP_API}/speciality/delete/${deleteId}`,  {headers: auth()})
          .then((res) => {
            console.log(res.data)
          })
      }
    

      return (
        <main id="speciality" className="speciality-container">
            <h1><span>Choisissez la spécialité désirée :</span></h1>
            
            {/* Je map mes spécialités */}
            {specialities.map((oneSpe, i) => (
                <article key={i} className="speciality-card">
                    <div>
                        <h2>Étage: {oneSpe.floor}</h2>
                        <h3>{oneSpe.name}</h3>
                    </div>
                    <div className="specialist-list">
                        {/* Je refais un map du tableau des spécialistes pour donner un spécialiste à la fois */}
                        {oneSpe.specialists.map((oneSpecialist, j) => (
                            <span key={j} className="specialist-card">
                                <h3>{oneSpecialist}</h3>
                            </span>
                        ))}
                    </div>
                    {admin && (
                        <>
                        <NavLink className="edit-spe-button" to={`/speciality/edit/${oneSpe._id}`}>Éditer</NavLink>
                        <button className="delete-spe-button" onClick={() => handleDeleteSpeciality(oneSpe._id)}>Supprimer</button>
                        </>
                    )}
                    
                </article>
            ))}
            {admin && (
                <NavLink className="add-spe-button" to="/speciality/add">Ajouter une spécialité</NavLink>
            )}
            
        </main>
    );
};

export default Speciality;