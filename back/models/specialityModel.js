import mongoose from "mongoose";

// Le modèle pour les spécialités

let specialitySchema = mongoose.Schema(
  {
    name: String,
    specialists: [],
    floor: String
  },
  {
    timestamps: true,
  }
);

let Speciality = mongoose.model("Speciality", specialitySchema);

export default Speciality;