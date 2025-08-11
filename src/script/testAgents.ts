// testAgents.ts
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/agents";

async function testAgentsAPI() {
  try {
    console.log("\n1️⃣ Creating Agent...");
    const createRes = await axios.post(BASE_URL, {
      context: "Test context",
      prompt: "Test prompt",
      language: "en",
      firstMessage: "Hello! I’m your assistant.",
      systemPrompt: "You are a helpful AI agent.",
    });
    console.log("✅ Created:", createRes.data);

    const agentId = createRes.data._id;

    console.log("\n2️⃣ Fetching All Agents...");
    const allRes = await axios.get(BASE_URL);
    console.log("✅ All Agents:", allRes.data);

    console.log("\n3️⃣ Fetching Single Agent...");
    const singleRes = await axios.get(`${BASE_URL}/${agentId}`);
    console.log("✅ Single Agent:", singleRes.data);

    console.log("\n4️⃣ Updating Agent...");
    const updateRes = await axios.put(`${BASE_URL}/${agentId}`, {
      context: "Updated context",
      prompt: "Updated prompt",
      language: "fr",
      firstMessage: "Bonjour!",
      systemPrompt: "You are a French AI assistant.",
    });
    console.log("✅ Updated Agent:", updateRes.data);

    console.log("\n5️⃣ Deleting Agent...");
    const deleteRes = await axios.delete(`${BASE_URL}/${agentId}`);
    console.log("✅ Deleted Agent:", deleteRes.data);

    console.log("\n🎯 All API tests completed successfully!");
  } catch (err: any) {
    console.error("❌ API Test Failed:", err.response?.data || err.message);
  }
}

testAgentsAPI();
