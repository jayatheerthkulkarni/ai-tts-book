import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import multer from 'multer';
import fs from 'fs/promises';
import { $ } from "bun";
import { fileURLToPath } from 'url';

dotenv.config(); /** Load environment variables from .env file **/

/** Get the current filename and directory name **/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const client_dir = path.join(__dirname, "../client");
const uploads_dir = path.join(__dirname, '../uploads'); /** Define uploads directory path **/
const file_storage_dir = path.join(__dirname, '../file_storage'); /** Define final storage path **/

/** Ensure upload and storage directories exist **/
await fs.mkdir(uploads_dir, { recursive: true });
await fs.mkdir(file_storage_dir, { recursive: true });


const app = express();
const port = process.env.PORT || 8888; /** Default to port 8888 if not set in .env **/

/** Allowed file extensions and their corresponding codes **/
const ALLOWED_EXTENSIONS_MAP = {
    '.pdf': 1,
    '.jpg': 2,
    '.jpeg': 2,
    '.png': 3,
    '.txt': 4,
};

/**
 * Configures the storage engine for Multer, defining destination and filename.
 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploads_dir); /** Store files temporarily in 'uploads' directory **/
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

/**
 * Filters incoming files based on their extensions.
 */
const fileFilter = (req, file, cb) => {
    const allowedExtensions = Object.keys(ALLOWED_EXTENSIONS_MAP);
    const fileExtension = path.extname(file.originalname).toLowerCase();

    console.log(`Checking file: ${file.originalname}, Type: ${fileExtension}`);

    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true); /** Accept the file **/
    } else {
        console.error(`Rejected file: ${file.originalname}. Unsupported type: ${fileExtension}`);
        cb(new Error(`Unsupported file type: ${fileExtension}`));
    }
};


/** Initialize Multer with storage and file filter **/
const upload = multer({ storage, fileFilter });

/** Serve static files from the client directory **/
app.use(express.static(path.join(__dirname, '../client')));

/**
 * Route to serve the main test page.
 */
app.get("/", (req, res) => {
    res.sendFile(path.join(client_dir, "/test.html"));
});

/**
 * Route to serve the home page.
 */
app.get("/home", (req, res) => {
    res.sendFile(path.join(client_dir, "/home_rendered/index.html"));
});

/**
 * Route to handle file uploads, process them, and move to final storage.
 */
app.post("/upload", upload.single("file"), async (req, res) => {
    if (req.fileFilterError) {
        console.error('File rejected by filter:', req.fileFilterError);
        return res.status(400).json({ message: req.fileFilterError.message });
    }

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded or file rejected.' });
    }

    try {
        let script_path = path.join(__dirname, "../files/init/files_init");
        console.log(`Executing script: ${script_path}`);
        const scriptResult = await $`${script_path}`.text();
        console.log("Script output:", scriptResult);

        const uploadedFile = req.file;
        const originalExtension = path.extname(uploadedFile.originalname).toLowerCase();
        let extensionCode = ALLOWED_EXTENSIONS_MAP[originalExtension];

        console.log('File accepted by Multer:', uploadedFile);

        const sourcePath = uploadedFile.path;
        const destinationPath = path.join(file_storage_dir, uploadedFile.originalname);

        console.log(`Moving file from ${sourcePath} to ${destinationPath}`);

        await fs.rename(sourcePath, destinationPath);

        console.log('File moved successfully to:', destinationPath);
        return res.status(200).json({ message: 'File uploaded and moved successfully.', filePath: destinationPath });

    } catch (error) {
        console.error('Error during post-upload processing or script execution:', error);

        if (req.file && req.file.path) {
            try {
                await fs.unlink(req.file.path);
                console.log(`Cleaned up temporary file: ${req.file.path}`);
            } catch (cleanupError) {
                console.error(`Error cleaning up temporary file ${req.file.path}:`, cleanupError);
            }
        }

        if (error.exitCode !== undefined) {
             return res.status(500).json({ message: `Script execution failed with code ${error.exitCode}` });
        }

         if (error.code && (error.code === 'ENOENT' || error.code === 'EPERM')) {
             return res.status(500).json({ message: 'Error processing file after upload (filesystem issue).' });
         }

        return res.status(500).json({ message: error.message || 'An internal server error occurred.' });
    }
});


/**
 * Global error handler middleware to catch errors from Multer and other parts.
 */
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(400).json({ message: `File upload error: ${err.message}` });
    }
    else if (err.message.startsWith('Unsupported file type:')) {
         console.error("File type error:", err);
          return res.status(400).json({ message: err.message });
    }
    else {
        console.error("Unhandled error:", err);
        return res.status(500).json({ message: 'An internal server error occurred.' });
    }
});


/**
 * Starts the Express server and listens for incoming connections.
 */
app.listen(port, () => {
    console.log(`App running on port ${port}, visit http://localhost:${port}`);
});