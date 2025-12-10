// server/express.js
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// ---------- Core middleware ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// ---------- API routes ----------
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", taskRoutes);

// ---------- Static React build ----------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");
const CLIENT_DIST = path.join(ROOT_DIR, "client", "dist");

console.log("Serving static files from:", CLIENT_DIST);

// Serve all files under client/dist (JS, CSS, images, etc.)
app.use(express.static(CLIENT_DIST));

// For any non-API route, send back index.html (SPA fallback)
app.get(/^\/(?!api|auth).*/, (req, res) => {
  res.sendFile(path.join(CLIENT_DIST, "index.html"));
});

// ---------- Error handler ----------
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    console.error(err);
    return res.status(400).json({ error: err.name + ": " + err.message });
  }
  next();
});

export default app;


