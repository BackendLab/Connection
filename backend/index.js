const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   res.send("Server is Running!");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the backend developer break up?",
      content: "Because their relationship had too many dependencies!",
    },
    {
      id: 2,
      title: "What’s a database’s favorite dance move?",
      content: "The Table Shuffle!",
    },
    {
      id: 3,
      title: "Why did the API go to therapy?",
      content: "It had too many unresolved requests!",
    },
    {
      id: 4,
      title: "How do servers flirt?",
      content: "They send each other HTTP requests!",
    },
    {
      id: 5,
      title: "Why don’t programmers like nature?",
      content: "Too many bugs!",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
