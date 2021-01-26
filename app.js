const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date= require(__dirname+"/date.js");

const items= ["Study IT","Work like a Ninja"];
const workItems=[];
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {

const day= date.getDate();

  res.render("list",{listTitle: day, ITEMS: items} );
});

app.post("/", function(req, res) {

    if(req.body.submit==="work"){
      let work=req.body.items;
      workItems.push(work);
      res.redirect("/work")
    }else{
const item=req.body.items;
     items.push(item);
       res.redirect("/");
     }
})

app.get("/work", function(req,res){

  res.render("list",{ITEMS:workItems, listTitle:"work"})
})


app.get("/about", function(req,res){

res.render("about");

})














      app.listen(3000, function() {
        console.log("server is up and running on port 3000!");
      })
