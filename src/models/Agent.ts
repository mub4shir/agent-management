import mongoose, { Schema, Document } from "mongoose";

export interface IAgent extends Document {
  language: string;
  firstMessage: string;
  systemPrompt: string;
  context: string;
  prompt: string;
  response?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AgentSchema = new Schema<IAgent>(
  {
    language: { type: String, required: true },
    firstMessage: { type: String, required: true },
    systemPrompt: { type: String, required: true },
    context: { type: String, required: true },
    prompt: { type: String, required: true },
    response: { type: String },
  },
  { timestamps: true }
);

export const Agent = mongoose.model<IAgent>("Agent", AgentSchema);
