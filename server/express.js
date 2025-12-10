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

// ------------------- Middleware -------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// ------------------- API Routes -------------------
// (if you prefer, you *could* mount them under /api, but
// to minimize changes we keep them as they were)
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", taskRoutes);

// ------------------- Error Handler ----------------
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    console.log(err);
    return res.status(400).json({ error: err.name + ": " + err.message });
  }
  next();
});

// ------------- Serve React build on Render --------

// Figure out project root (one level above /server)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");

// Path to built React app
const CLIENT_BUILD_PATH = path.join(ROOT_DIR, "client", "dist");

// Serve static files (JS, CSS, images, etc.)
app.use(express.static(CLIENT_BUILD_PATH));

// For ANY non-API route, send back index.html (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});

export default app;
