// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static());
// const PORT = process.env.port || 5000;
// app.listen(PORT);
const express = require("express");
const app = express();
const path = require("path");

// Use the correct path.join to join __dirname and "public" folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000; // Use uppercase "PORT"
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
