import express from "express";
import { isLogged } from "../middlewares/auth.js";
import { AddAppointment, DeleteAppointment, GetAppointments, GetAppointmentsByUser } from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

// Je récupère tous les rendez-vous
appointmentRouter.get("/appointments", isLogged, GetAppointments)

// Je récupère tous les rendez-vous par utilisateur
appointmentRouter.get("/appointments-by-user", isLogged, GetAppointmentsByUser)

// J'ajoute un rendez-vous
appointmentRouter.post("/new-appointment", isLogged, AddAppointment)

// Je supprime un rendez-vous
appointmentRouter.delete("/appointments/delete/:id", isLogged, DeleteAppointment )


export default appointmentRouter;