import mongoose, { Schema, Document } from "mongoose";

export interface IAgent extends Document {
  agentName: string;
  description: string;
  agentType?: string;
  additionalLanguages?: string[];
  language?: string;
  firstMessage?: string;
  systemPrompt?: string;
  agentLogo?: string; // URL or path to the agent's logo
  folders: {
    name: string;
    files: string[]; // MinIO file paths
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const AgentSchema = new Schema<IAgent>(
  {
    agentName: { type: String, required: true },
    description: { type: String, required: true },
    agentType: { type: String },
    additionalLanguages: [{ type: String }],
    language: { type: String },
    firstMessage: { type: String },
    systemPrompt: { type: String },
    agentLogo: { type: String }, // URL or path to the agent's logo
    folders: [
      {
        name: { type: String, required: true },
        files: [{ type: String }],
      },
    ],
  },
  { timestamps: true }
);

export const Agent = mongoose.model<IAgent>("Agent", AgentSchema);
