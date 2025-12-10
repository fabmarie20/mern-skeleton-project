// config/config.js
const config = {
  mongoUri:
    process.env.MONGO_URI ||
    "mongodb+srv://blessjiboye1234:LXdz3BukK2lh7Sq8@cluster0.ebu892n.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0",
  jwtSecret: process.env.JWT_SECRET || "development-secret-key",
  port: process.env.PORT || 3000,
};

export default config;



   