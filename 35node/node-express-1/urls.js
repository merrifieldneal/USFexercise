const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Function to make GET request and save HTML to a file
async function saveHtmlToFile(url, outputFileName) {
    try {
        const response = await axios.get(url);
        fs.writeFileSync(outputFileName, response.data);
        console.log(`Saved HTML from ${url} to ${outputFileName}`);
    } catch (error) {
        console.error(`Error downloading ${url}: ${error.message}`);
    }
}

// Function to process each URL from the file
async function processUrlsFromFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf-8');
        const urls = data.split('\n').map((url) => url.trim());

        for (const url of urls) {
            if (!url) continue; // Skip empty lines

            try {
                const urlObj = new URL(url);
                const outputFileName = path.join(__dirname, `${urlObj.hostname}`);
                await saveHtmlToFile(url, outputFileName);
            } catch (error) {
                console.error(`Error processing URL ${url}: ${error.message}`);
            }
        }
    } catch (error) {
        console.error(`Error reading file ${filename}: ${error.message}`);
        process.exit(1); // Exit the script with an error code
    }
}

// Main function to execute the script
function main() {
    const args = process.argv.slice(2);
    if (args.length !== 1) {
        console.error('Usage: node urls.js FILENAME');
        process.exit(1); // Exit the script with an error code
    }

    const filename = args[0];
    processUrlsFromFile(filename);
}

main();