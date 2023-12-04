import Appointment from "../models/appointmentModel.js"

// J'ajoute un rendez-vous dans la BDD
export const AddAppointment = async (req, res) => {

  const appointmentDate = new Date(req.body.date)
  const appointmentHour = new Date(appointmentDate)
  appointmentHour.setHours(parseInt(req.body.hour.split(":")[0]))
  appointmentHour.setMinutes(parseInt(req.body.hour.split(":")[1]))
  const endHour = new Date(appointmentHour)
  endHour.setMinutes(endHour.getMinutes() + 30)

  let appointment = new Appointment({
    date: appointmentDate,
    startHour: appointmentHour,
    endHour: endHour,
    specialist: req.body.specialist,
    userId: req.userId
  })

  const checkAvailableAppointment = await Appointment.find({
    date: appointment.date,
    $or: [
      {
        startHour: { $lt: appointment.endHour },
        endHour: { $gt: appointment.startHour }
      }
    ]
  })
  if (checkAvailableAppointment.length > 0) {
    return res.json({ message: "Il y a déjà un rendez-vous sur cette plage horaire" })
  }
  await appointment.save()
  res.json({ message: "Votre rendez-vous a bien été enregistré" })
}

// Je récupère tous les rendez-vous dans la BDD
export const GetAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.json(appointments)
  } catch (err) {
    res.json({ message: "Il n'y a pas de rendez-vous actuellement" })
  }
}

export const GetAppointmentsByUser = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.userId })
    res.json(appointments)
  } catch (err) {
    res.json({ message: "Impossible de récupérer vos rendez-vous" })
  }
}

// Je peux supprimer une spécialité dans la BDD
export const DeleteAppointment = async (req, res) => {
  try {
    const { id } = req.params
    await Appointment.deleteOne({ _id: id })
    res.json({ message: "Le rendez-vous a bien été supprimé" })
  } catch (err) {
    res.json({ message: "Erreur lors de la tentative de suppression du rendez-vous" })
  }
}