import {RunMongoDb} from "./src/lib/db.js"; 
const PORT = 8000
import app from "./src/app.js";



// In your main file (e.g., src/index.js)
async function startserver() {
  try {
    // Await the connection so the server doesn't start until ready
    await RunMongoDb();
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Exit with failure if DB cannot connect
  }
}

await startserver()
