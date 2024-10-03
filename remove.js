const fs = require('fs').promises; // Import the 'fs' module using promises for async operations
const path = require('path');      // Import the 'path' module for handling file paths

const logsDir = path.join(__dirname, 'Logs');  // Set the path for the Logs directory

// Async function to remove files and directory
async function deleteLogsDirectory() {
    try {
        // Check if the Logs directory exists
        await fs.access(logsDir);
        
        // Read and delete each file in the Logs directory
        const files = await fs.readdir(logsDir);
        for (const file of files) {
            console.log(`Deleting file: ${file}`); // Log the file being deleted
            await fs.unlink(path.join(logsDir, file)); // Delete the file
        }

        // Delete the Logs directory
        await fs.rmdir(logsDir);
        console.log('Logs directory deleted.');  // Log the directory deletion
    } catch (error) {
        // If the Logs directory doesn't exist, log this information
        if (error.code === 'ENOENT') {
            console.log('Logs directory does not exist.');
        } else {
            console.error('An error occurred:', error);
        }
    }
}

// Call the async function to delete files and directory
deleteLogsDirectory();
