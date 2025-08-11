import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Agent API",
      version: "1.0.0",
      description: "API documentation for Agent management",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"], // Path to your route files with annotations
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
