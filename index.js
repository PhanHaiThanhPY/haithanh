var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(7777);
app.get("/", function(request, response)  {
   
    response.render("home");
});

app.get("/Home", function(request, response)  {
   
    response.render("home");
});

app.get("/about", function(request, response)  {
   
    response.render("about");
});

app.get("/Board_Management", function(request, response)  {
   
    response.render("Board_Management");

});

app.get("/Accessibility", function(request, response)  {
   
    response.render("Accessibility");

});
app.get("/Affiliations", function(request, response)  {
   
    response.render("Affiliations");

});
app.get("/Careers", function(request, response)  {
   
    response.render("Careers");

});

app.get("/Contact", function(request, response)  {
   
    response.render("Contact");

});

app.get("/Disclaimer", function(request, response)  {
   
    response.render("Disclaimer");

});

app.get("/History", function(request, response)  {
   
    response.render("History");

});

app.get("/NEWS-EVENTS", function(request, response)  {
   
    response.render("NEWS-EVENTS");

});

app.get("/OUR_PRODUCTS", function(request, response)  {
   
    response.render("OUR_PRODUCTS");

});

app.get("/Responsible_Investment", function(request, response)  {
   
    response.render("Responsible_Investment");

});

app.get("/Segregated_Managed_Accounts", function(request, response)  {
   
    response.render("Segregated_Managed_Accounts");

});

app.get("/Vietnam_Enterprise_Investments_Limited", function(request, response)  {
   
    response.render("Vietnam_Enterprise_Investments_Limited");

});

app.get("/VietNam", function(request, response)  {
   
    response.render("VietNam");

});

