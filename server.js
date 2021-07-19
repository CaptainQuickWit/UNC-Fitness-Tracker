const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//uses mongoose for the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes that will be used 
app.use(require("./routes/apiRouting.js"));
app.use(require("./routes/htmlRouting.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
