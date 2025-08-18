// src/script/testIndustries.ts
import axios from "axios";

const API_BASE = "http://localhost:8080/api/industries";

async function testIndustries() {
  try {
    console.log("1️⃣ Creating Industry...");
    const createRes = await axios.post(API_BASE, {
      id: "travel",
      title: "Travel",
      icon: "Plane",
      gradient: "from-sky-500 to-cyan-400",
      bgGradient: "from-sky-50 to-cyan-50",
      stats: "2.5K+ Partners",
      description: "Airlines & premium travel services",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      rating: 4.7,
      established: "2022",
      badge: "New",
      fleet: "28 Aircraft",
      passengers: "2M+ Yearly",
      hubs: "English, Hindi",
      awards: "Best New Airline 2023",
      routes: "50+ Destinations",
    });
    console.log("✅ Industry Created:", createRes.data);

    console.log("\n2️⃣ Getting All Industries...");
    const listRes = await axios.get(API_BASE);
    console.log("✅ Industries List:", listRes.data);

    console.log("\n3️⃣ Getting Industry by ID...");
    const getRes = await axios.get(`${API_BASE}/travel`);
    console.log("✅ Industry Details:", getRes.data);

    console.log("\n4️⃣ Updating Industry...");
    const updateRes = await axios.put(`${API_BASE}/travel`, {
      title: "Travel & Tourism",
      stats: "3K+ Partners",
      rating: 4.8,
    });
    console.log("✅ Industry Updated:", updateRes.data);

    console.log("\n5️⃣ Deleting Industry...");
    const deleteRes = await axios.delete(`${API_BASE}/travel`);
    console.log("✅ Industry Deleted:", deleteRes.data);

    console.log("\n🎉 All Industry API tests completed successfully!");
  } catch (error: any) {
    console.error(
      "❌ Industry API Test Failed:",
      error.response?.data || error.message
    );
  }
}

testIndustries();
