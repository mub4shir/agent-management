// src/routes/industryRoutes.ts
import { Router } from "express";
import {
  createIndustry,
  getIndustries,
  getIndustry,
  updateIndustry,
  deleteIndustry,
} from "../controllers/industryController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Industries
 *   description: Manage industries data
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Industry:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - icon
 *       properties:
 *         id:
 *           type: string
 *           example: travel
 *         title:
 *           type: string
 *           example: Travel
 *         icon:
 *           type: string
 *           example: Plane
 *         gradient:
 *           type: string
 *           example: from-sky-500 to-cyan-400
 *         bgGradient:
 *           type: string
 *           example: from-sky-50 to-cyan-50
 *         stats:
 *           type: string
 *           example: 2.5K+ Partners
 *         description:
 *           type: string
 *           example: Airlines & premium travel services
 *         location:
 *           type: string
 *           example: India
 *         image:
 *           type: string
 *           example: https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop
 *         rating:
 *           type: number
 *           example: 4.7
 *         established:
 *           type: string
 *           example: 2022
 *         badge:
 *           type: string
 *           example: New
 *         fleet:
 *           type: string
 *           example: 28 Aircraft
 *         passengers:
 *           type: string
 *           example: 2M+ Yearly
 *         hubs:
 *           type: string
 *           example: English, Hindi
 *         awards:
 *           type: string
 *           example: Best New Airline 2023
 *         routes:
 *           type: string
 *           example: 50+ Destinations
 */

/**
 * @swagger
 * /api/industries:
 *   post:
 *     summary: Create a new industry
 *     tags: [Industries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Industry'
 *     responses:
 *       201:
 *         description: Industry created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", createIndustry);

/**
 * @swagger
 * /api/industries:
 *   get:
 *     summary: Get all industries
 *     tags: [Industries]
 *     responses:
 *       200:
 *         description: List of all industries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Industry'
 */
router.get("/", getIndustries);

/**
 * @swagger
 * /api/industries/{id}:
 *   get:
 *     summary: Get an industry by ID
 *     tags: [Industries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Industry ID
 *     responses:
 *       200:
 *         description: Industry found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Industry'
 *       404:
 *         description: Industry not found
 */
router.get("/:id", getIndustry);

/**
 * @swagger
 * /api/industries/{id}:
 *   put:
 *     summary: Update an industry by ID
 *     tags: [Industries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Industry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Industry'
 *     responses:
 *       200:
 *         description: Industry updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Industry not found
 */
router.put("/:id", updateIndustry);

/**
 * @swagger
 * /api/industries/{id}:
 *   delete:
 *     summary: Delete an industry by ID
 *     tags: [Industries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Industry ID
 *     responses:
 *       200:
 *         description: Industry deleted
 *       404:
 *         description: Industry not found
 */
router.delete("/:id", deleteIndustry);

export default router;
