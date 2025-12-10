// server.js  (root)
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to Atlas Database!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

app.listen(config.port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.info("Server started on port %s.", config.port);
});



