import mongoose, { Schema, Document } from "mongoose";

export interface IIndustry extends Document {
  id: string;
  title: string;
  icon: string; // store lucide-react icon name
  gradient: string;
  bgGradient: string;
  stats: string;
  description: string;
  location: string;
  image: string;
  rating: number;
  established: string;
  badge?: string;
  fleet?: string;
  passengers?: string;
  hubs?: string;
  awards?: string;
  routes?: string;
}

const IndustrySchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    icon: { type: String, required: true },
    gradient: { type: String },
    bgGradient: { type: String },
    stats: { type: String },
    description: { type: String },
    location: { type: String },
    image: { type: String },
    rating: { type: Number },
    established: { type: String },
    badge: { type: String },
    fleet: { type: String },
    passengers: { type: String },
    hubs: { type: String },
    awards: { type: String },
    routes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IIndustry>("Industry", IndustrySchema);
