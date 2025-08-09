const functions = require("firebase-functions");

exports.eduAI = functions.https.onRequest((req, res) => {
  res.send("🔥 EduAI is LIVE! Next: Connect OpenAI API");
});
