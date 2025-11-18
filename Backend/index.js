import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import mongoose from 'mongoose'
import TaskRoutes from './routes/taskRoute.js'

// Load environment variables from .env file into process.env
dotenv.config();

// Create Express application instance
const app = express()

// Define the port the server will listen on
// Use PORT from environment (e.g., for deployment) or default to 5000 for local development
const PORT = process.env.PORT || 5000;


// Enable Cross-Origin Resource Sharing (CORS)
// Allows frontend (e.g., React app on http://localhost:5173) to call this API
app.use(cors())

// Parse incoming JSON requests
app.use(express.json())

// =============================================================================
// Route Registration
// =============================================================================

app.use('/api/tasks',TaskRoutes)

//variables for the db connection
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

//connecting to the mongodb using mongoose
mongoose.connect(`${dbHost}:${dbPort}/${dbName}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    //console statement to confirm the db is connected
    console.log("thumbs up DB IS CONNECTED")
})
.catch((err) => {
    //console statement for the failing to connect the db
    console.error("❌ DB CONNECTION FAILED:", err.message);
});

//console statement to confirm that the server is running
app.listen(PORT, () => console.log("✅ Server running on port",PORT))