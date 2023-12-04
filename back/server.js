import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import specialityRouter from "./routes/specialityRouter.js";
import userRouter from "./routes/userRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js";

dotenv.config();

const app = express();

connectDB;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Credentials à true fait en sorte que mon serveur envoie la session/cookie à React
// app.use(
//   cors({
//     origin: "http://yannaudrin.ide.3wa.io:3000",
//     credentials: true,
//   })
// );

app.use(cors())

// Mes routers
app.use(specialityRouter);
app.use(userRouter)
app.use(appointmentRouter)

// Mon port d'écoute, toujours à la fin
app.listen(process.env.PORT, () => {
  console.log(`Le serveur est exécuté: ${process.env.BASE_URL}`);
});