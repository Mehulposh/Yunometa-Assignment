import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";

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

app.use('api/tasks')


app.listen(PORT, () => console.log("✅ Server running on port",PORT))