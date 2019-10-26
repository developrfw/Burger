// requiring dependencies
const express = require("express")
const app = express();

// Setting the Port
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parsing application body as JSON
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Setting up the handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view-engine", "handlebars");

// Importing routes and access
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// starting server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

