import express from "express";
import { AddSpeciality, DeleteSpeciality, EditSpeciality, GetAllSpecialists, GetSpecialities, GetSpeciality } from "../controllers/specialityController.js";
import { isAdmin, isLogged } from "../middlewares/auth.js";

const specialityRouter = express.Router();

// Je récupère toutes les spécialités
specialityRouter.get("/speciality", GetSpecialities);

// J'ajoute une spécialité
specialityRouter.post("/speciality/add", isLogged, isAdmin, AddSpeciality)

// J'obtiens une spécialité particulière grâce au paramètre dynamique
specialityRouter.get("/speciality/:id", GetSpeciality)

// J'edit une specialité
specialityRouter.post("/speciality/edit/:id", isLogged, isAdmin, EditSpeciality)

// Je supprime une spécialité
specialityRouter.delete("/speciality/delete/:id", isLogged, isAdmin, DeleteSpeciality)

// J'obtiens tous les spécialistes
specialityRouter.get("/specialists", GetAllSpecialists)

export default specialityRouter;