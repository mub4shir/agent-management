import { Router } from "express";
import {
  createAgent,
  getAgents,
  getAgentById,
  updateAgent,
  deleteAgent,
} from "../controllers/agentController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Agent:
 *       type: object
 *       required:
 *         - language
 *         - firstMessage
 *         - systemPrompt
 *         - context
 *         - prompt
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the agent
 *         language:
 *           type: string
 *         firstMessage:
 *           type: string
 *         systemPrompt:
 *           type: string
 *         context:
 *           type: string
 *         prompt:
 *           type: string
 *         response:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         language: "en"
 *         firstMessage: "Hello! I’m your assistant."
 *         systemPrompt: "You are a helpful AI agent."
 *         context: "Test context"
 *         prompt: "Test prompt"
 *         response: "Test response"
 */

/**
 * @swagger
 * /api/agents:
 *   post:
 *     summary: Create a new agent
 *     tags: [Agents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agent'
 *     responses:
 *       201:
 *         description: Agent created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agent'
 */
router.post("/", createAgent);

/**
 * @swagger
 * /api/agents:
 *   get:
 *     summary: Get all agents
 *     tags: [Agents]
 *     responses:
 *       200:
 *         description: List of all agents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agent'
 */
router.get("/", getAgents);

/**
 * @swagger
 * /api/agents/{id}:
 *   get:
 *     summary: Get an agent by ID
 *     tags: [Agents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The agent ID
 *     responses:
 *       200:
 *         description: Agent data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agent'
 *       404:
 *         description: Agent not found
 */
router.get("/:id", getAgentById);

/**
 * @swagger
 * /api/agents/{id}:
 *   put:
 *     summary: Update an agent by ID
 *     tags: [Agents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The agent ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agent'
 *     responses:
 *       200:
 *         description: Agent updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agent'
 *       404:
 *         description: Agent not found
 */
router.put("/:id", updateAgent);

/**
 * @swagger
 * /api/agents/{id}:
 *   delete:
 *     summary: Delete an agent by ID
 *     tags: [Agents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The agent ID
 *     responses:
 *       200:
 *         description: Agent deleted successfully
 *       404:
 *         description: Agent not found
 */
router.delete("/:id", deleteAgent);

export default router;
