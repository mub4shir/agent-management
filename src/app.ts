import express from "express";
import cors from "cors";
import morgan from "morgan";
import agentRoutes from "./routes/agentRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/agents", agentRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/ping", (_req, res) => res.json({ status: "ok" }));

export default app;
