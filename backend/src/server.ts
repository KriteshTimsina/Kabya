import express, { Request, Response } from "express";
import artistRoutes from "./routes/artist.routes";
import songRoutes from "./routes/song.routes"
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/api/artist", artistRoutes);
app.use("/api/song", songRoutes);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
