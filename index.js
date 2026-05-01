import express from "express";

const app = express();

app.get("/api", async (req, res) => {
  const apiKey = process.env.API_KEY;

  // مثال بسيط
  res.json({
    message: "السيرفر شغال",
    keyExists: apiKey ? true : false
  });
});

app.listen(3000, () => console.log("Server running"));
