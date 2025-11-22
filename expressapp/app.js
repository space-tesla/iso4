const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send("Invalid input: name and age are required");
  }

  if (isNaN(age)) {
    return res.status(400).send("Age must be a number");
  }

  res.send(`Data received successfully: ${name}, ${age}`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
// Step 3: Open browser → http://localhost:3000

// HOW TO TEST USING POSTMAN OR TERMINAL:
// Send POST request to: http://localhost:3000/submit
// Open Second Terminal in VS Code
// Example Terminal Command:
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Gauri","age":22}' http://localhost:3000/submit
