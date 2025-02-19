import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/config.js";
import userRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api/projects", projectRoutes);
// app.use("/api/youtube", youtubeRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server Started at Port: ${port}`);
});
