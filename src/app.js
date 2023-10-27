const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
// Running the database file and connecting to the database server
const db = require("./db/conn"); // Just write require("./db/conn")
const Student = require("./models/registers");
const hbs = require("hbs");

// console.log(path.join(__dirname, './public'));
const staticPath = path.join(__dirname, "./public");
// console.log( path.join(__dirname, '../templates/views'));
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    // This is from view of input field name attribute - password
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    if (password === cpassword) {
      const newStudent = new Student({
        // keys are from the database schema/columns
        // firstname->Database: req.body.firstLetterName->input
        firstname: req.body.firstLetterName,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const registerd = await newStudent.save();
      res.redirect('/');
    } else {
      res.send("Passwords do not match");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at port no ${port}!`);
});
