import axios from "axios";

// const BASE_URL = "http://localhost:8080/api/agents";
const BASE_URL = "http://34.131.176.96:8080/api/agents";

async function testAgentsAPI() {
  try {
    console.log("\n1️⃣ Creating Agent...");
    const createRes = await axios.post(BASE_URL, {
      agentName: "Test Agent",
      description: "This is a test agent",
      agentType: "conversational",
      additionalLanguages: ["en", "fr"],
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
      agentName: "Updated Test Agent",
      description: "Updated description",
      agentType: "informational",
      additionalLanguages: ["en", "es", "de"],
      language: "fr",
      firstMessage: "Bonjour! Je suis votre assistant.",
      systemPrompt: "Vous êtes un assistant IA utile.",
    });
    console.log("✅ Updated Agent:", updateRes.data);

    console.log("\n5️⃣ Deleting Agent...");
    //  const deleteRes = await axios.delete(`${BASE_URL}/${agentId}`);
    // console.log("✅ Deleted Agent:", deleteRes.data);

    console.log("\n🎯 All API tests completed successfully!");
  } catch (err: any) {
    console.error("❌ API Test Failed:", err.response?.data || err.message);
  }
}

testAgentsAPI();
