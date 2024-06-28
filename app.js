const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT ?? 3_000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("index");
});

app.post("/datosAlumno", (request, response) => {
    console.log(request.body);
    response.render("student-data", request.body);
});

app.get("/datosNuevo/:name/:career/:group/:year/:period", (request, response) => {
    console.log(request.params);
    response.render("student-register", request.params);
})

app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
