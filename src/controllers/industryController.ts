// src/controllers/industryController.ts
import { Request, Response } from "express";
import Industry from "../models/Industry";

// Create
export const createIndustry = async (req: Request, res: Response) => {
  try {
    const industry = new Industry(req.body);
    await industry.save();
    res.status(201).json(industry);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// Read all
export const getIndustries = async (_req: Request, res: Response) => {
  try {
    const industries = await Industry.find();
    res.json(industries);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Read one
export const getIndustry = async (req: Request, res: Response) => {
  try {
    const industry = await Industry.findOne({ id: req.params.id });
    if (!industry) return res.status(404).json({ error: "Not found" });
    res.json(industry);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updateIndustry = async (req: Request, res: Response) => {
  try {
    const industry = await Industry.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!industry) return res.status(404).json({ error: "Not found" });
    res.json(industry);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
export const deleteIndustry = async (req: Request, res: Response) => {
  try {
    const industry = await Industry.findOneAndDelete({ id: req.params.id });
    if (!industry) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Industry deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
