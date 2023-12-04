import mongoose from "mongoose";

// Le modèle pour les rendez-vous

let appointmentSchema = mongoose.Schema(
  {
    date: Date,
    startHour: Date,
    endHour: Date,
    specialist: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);

let Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;