import { Request, Response } from "express";
import { Agent } from "../models/Agent";

// Create new agent
export const createAgent = async (req: Request, res: Response) => {
  try {
    const agent = await Agent.create(req.body);
    res.status(201).json(agent);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Get all agents
export const getAgents = async (_req: Request, res: Response) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Get single agent
export const getAgentById = async (req: Request, res: Response) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) return res.status(404).json({ error: "Agent not found" });
    res.json(agent);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Update agent
export const updateAgent = async (req: Request, res: Response) => {
  try {
    const agent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!agent) return res.status(404).json({ error: "Agent not found" });
    res.json(agent);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Delete agent
export const deleteAgent = async (req: Request, res: Response) => {
  try {
    const agent = await Agent.findByIdAndDelete(req.params.id);
    if (!agent) return res.status(404).json({ error: "Agent not found" });
    res.json({ message: "Agent deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
