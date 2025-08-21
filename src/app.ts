import express from "express";
import cors from "cors";
import morgan from "morgan";
import agentRoutes from "./routes/agentRoutes";
import filesRoutes from "./routes/fileRoutes";
import industryRoutes from "./routes/industryRoutes";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Serve static files from /uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// Routes
app.use("/api/agents", agentRoutes);

app.use("/api/files", filesRoutes);

app.use("/api/industries", industryRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/ping", (_req, res) => res.json({ status: "ok" }));

export default app;
