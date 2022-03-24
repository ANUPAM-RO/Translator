const express = require('express')
const mongoose = require("mongoose");
const dataRouter = require("./routes/TranslateRoute") 
const app = express()
const path = require("path");
const { I18n } = require("i18n");
app.set('view engine', 'ejs');
app.use(express.json())

const i18n = new I18n({
  locales: ["en", "bn", "hi", "tm","pa", "az"],
  directory: path.join(__dirname, "locales"),
  register: global,
});
app.get("/", (req, res) => {
  i18n.setLocale("en");
  res.render("home")
});

app.get("/bengali", (req, res) => {
  i18n.setLocale("bn");
  res.render("home")
});

app.get("/hindi", (req, res) => {
  i18n.setLocale("hi");
  res.render("home")
});

app.get("/tamil", (req, res) => {
  i18n.setLocale("tm");
  res.render("home")
});

app.get("/panjabi", (req, res) => {
  i18n.setLocale("pa");
  res.render("home")
});

app.get("/latin", (req, res) => {
  i18n.setLocale("az");
  res.render("home")
});

mongoose.connect("mongodb://localhost:27017/translate",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}, (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Mongodb connected Sucessfully");
    }
});

app.use("/data" , dataRouter)
app.listen(5000)