import { Router } from "express";
import multer from "multer";
import {
  createFolder,
  uploadFile,
  listFiles,
} from "../controllers/fileController";

const router = Router();
const upload = multer({ dest: "uploads/tmp/" });

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: Manage agent-specific folders and documents
 */

/**
 * @swagger
 * /api/files/folder:
 *   post:
 *     summary: Create a folder for an agent
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [agentId, folderName]
 *             properties:
 *               agentId:
 *                 type: string
 *                 description: Agent ID
 *               folderName:
 *                 type: string
 *                 description: Folder name
 *     responses:
 *       201:
 *         description: Folder created successfully
 */
router.post("/folder", createFolder);

/**
 * @swagger
 * /api/files/upload:
 *   post:
 *     summary: Upload a file into an agent’s folder
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [agentId, file]
 *             properties:
 *               agentId:
 *                 type: string
 *               folderName:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded successfully
 */
router.post("/upload", upload.single("file"), uploadFile);

/**
 * @swagger
 * /api/files/{agentId}/{folderName}:
 *   get:
 *     summary: List files in an agent’s folder
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         schema:
 *           type: string
 *         required: true
 *         description: Agent ID
 *       - in: path
 *         name: folderName
 *         schema:
 *           type: string
 *         required: false
 *         description: Folder name
 *     responses:
 *       200:
 *         description: List of files
 */
router.get("/:agentId/:folderName", listFiles);

export default router;
