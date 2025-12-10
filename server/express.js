import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/task.routes.js";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import path from "path";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", taskRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

const CURRENT_DIR = path.resolve();

app.use(express.static(path.join(CURRENT_DIR, "client", "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(CURRENT_DIR, "client", "dist", "index.html"));
});

// existing error handler...
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

// Find the *project root* (one level up from /server)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");

// Serve the built React files
app.use(express.static(path.join(ROOT_DIR, "client", "dist")));

// For any non-API route, send back index.html (SPA)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "client", "dist", "index.html"));
});
    
export default app;
