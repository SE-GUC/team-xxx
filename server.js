const express = require("express");
const mongoose = require("mongoose").set("debug", true);
const path = require("path");

const app = express();
const config = require("config");
const Consultancys = require("./routes/api/Consultancys");
const Members = require("./routes/api/Members");
const Partners = require("./routes/api/Partners");
const Projects = require("./routes/api/Projects");
const Slots = require("./routes/api/Slots");
const Meetings = require("./routes/api/Meetings");
const Admins = require("./routes/api/Admins");
const auth = require("./routes/api/auth");

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = process.env.mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// Use Routes
app.use("/api/Consultancys", Consultancys);
app.use("/api/Members", Members);
app.use("/api/Partners", Partners);
app.use("/api/Projects", Projects);
app.use("/api/Slots", Slots);
app.use("/api/Meetings", Meetings);
app.use("/api/Admins", Admins);
app.use("/api/auth", auth);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
