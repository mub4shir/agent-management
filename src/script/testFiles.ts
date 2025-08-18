import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

const BASE_URL = "http://localhost:8080/api/files";

async function testFileAPI() {
  try {
    const agentId = "agent123";
    const folderName = "docs";

    console.log("\n1️⃣ Creating Folder...");
    const createRes = await axios.post(`${BASE_URL}/folder`, {
      agentId,
      folderName,
    });
    console.log("✅ Folder Created:", createRes.data);

    console.log("\n2️⃣ Uploading File...");
    const form = new FormData();
    form.append("agentId", agentId);
    form.append("folderName", folderName);
    form.append(
      "file",
      fs.createReadStream(path.join(__dirname, "sample.pdf")) // <-- place a sample.pdf in same folder
    );

    const uploadRes = await axios.post(`${BASE_URL}/upload`, form, {
      headers: form.getHeaders(),
    });
    console.log("✅ File Uploaded:", uploadRes.data);

    console.log("\n3️⃣ Listing Files...");
    const listRes = await axios.get(`${BASE_URL}/${agentId}/${folderName}`);
    console.log("✅ Files in Folder:", listRes.data);

    console.log("\n🎯 File API tests completed successfully!");
  } catch (err: any) {
    console.error(
      "❌ File API Test Failed:",
      err.response?.data || err.message
    );
  }
}

testFileAPI();
