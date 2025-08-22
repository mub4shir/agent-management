import { Request, Response } from "express";
import fs from "fs";
import path from "path";

// Base upload directory
const UPLOADS_DIR = path.join(__dirname, "../../uploads");

// Create folder for an agent
export const createFolder = (req: Request, res: Response) => {
  try {
    const { agentId, folderName } = req.body;

    if (!agentId || !folderName) {
      return res
        .status(400)
        .json({ error: "agentId and folderName are required" });
    }

    const folderPath = path.join(UPLOADS_DIR, agentId, folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    res
      .status(201)
      .json({ message: "Folder created successfully", folderPath });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// // Upload file into an agent’s folder
// export const uploadFile = (req: Request, res: Response) => {
//   try {
//     const { agentId, folderName } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const folderPath = path.join(UPLOADS_DIR, agentId, folderName || "");
//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath, { recursive: true });
//     }

//     const filePath = path.join(folderPath, req.file.originalname);
//     fs.renameSync(req.file.path, filePath);
//     const fileUrl = `${req.protocol}://${req.get(
//       "host"
//     )}/uploads/${agentId}/${folderName}/${req.file.filename}`;

//     res.status(201).json({
//       message: "File uploaded successfully",
//       file: {
//         name: req.file.originalname,
//         path: filePath,
//         size: req.file.size,
//         mimetype: req.file.mimetype,
//         fileUrl,
//       },
//     });
//   } catch (error: any) {
//     res.status(500).json({ error: error.message });
//   }
// };
// Upload file into an agent’s folder
// Upload file into an agent’s folder

export const uploadFile = (req: Request, res: Response) => {
  const UPLOADS_DIR = path.join(__dirname, "../../uploads");
  try {
    const { agentId, folderName = "" } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Ensure agent/folder exists
    const folderPath = path.join(UPLOADS_DIR, agentId, folderName);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Move file from tmp to final folder using original name
    const finalFileName = req.file.originalname;
    const finalFilePath = path.join(folderPath, finalFileName);
    fs.renameSync(req.file.path, finalFilePath);

    // Build accessible URL
    const fileUrl = `${req.protocol}://${req.get(
      "host"
    )}/uploads/${agentId}/${encodeURIComponent(
      folderName
    )}/${encodeURIComponent(finalFileName)}`;

    res.status(201).json({
      message: "File uploaded successfully",
      file: {
        name: finalFileName,
        path: finalFilePath,
        size: req.file.size,
        mimetype: req.file.mimetype,
        fileUrl,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// List files in an agent’s folder
export const listFiles = (req: Request, res: Response) => {
  try {
    const { agentId, folderName } = req.params;
    const folderPath = path.join(UPLOADS_DIR, agentId, folderName || "");

    if (!fs.existsSync(folderPath)) {
      return res.status(404).json({ error: "Folder not found" });
    }

    const files = fs.readdirSync(folderPath);
    res.json({ files });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
