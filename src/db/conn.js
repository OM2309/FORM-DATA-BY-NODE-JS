const mongoose = require("mongoose");
// Promise object
mongoose
  .connect("mongodb://127.0.0.1:27017/studentRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
