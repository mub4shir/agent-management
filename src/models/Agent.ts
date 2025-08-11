import mongoose, { Schema, Document } from "mongoose";

export interface IAgent extends Document {
  agentName: string;
  description: string;
  agentType?: string;
  additionalLanguages?: string[];
  language?: string;
  firstMessage?: string;
  systemPrompt?: string;
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
  },
  { timestamps: true }
);

export const Agent = mongoose.model<IAgent>("Agent", AgentSchema);
