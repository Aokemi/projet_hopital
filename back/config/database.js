import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Je connecte ma BDD

export const connectDB = mongoose.connect(process.env.DB_URI);
// export const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/blog_pajs")
// export const connectDB = mongoose.connect("mongodb://0.0.0.1:27017/blog_pajs")

mongoose.connection.on("open", () => {
  console.log("Connexion à la base de données effectuée avec succès");
});

mongoose.connection.on("error", () => {
  console.log("Impossible de se connecter à la BDD");
});
