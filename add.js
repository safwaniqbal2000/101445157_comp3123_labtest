const fs = require('fs');     // Import file system module
const path = require('path'); // Import path module

const logsDir = path.join(__dirname, 'Logs'); // Set path for the Logs directory

// Function to create the Logs directory if it doesn't exist
function createLogsDirectory() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }
}

// Function to create log files using a while loop
function createLogFiles() {
    let i = 1;
    while (i <= 10) {
        const filePath = path.join(logsDir, `log${i}.txt`); // Set file path
        fs.writeFileSync(filePath, `This is log file number ${i}`); // Write content
        console.log(`Created file: log${i}.txt`); // Log file creation
        i++;
    }
}

// Run the functions
createLogsDirectory();  // Check or create Logs directory
createLogFiles();       // Create 10 log files using while loop
