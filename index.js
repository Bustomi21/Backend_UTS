//import express
import express from "express";
//import router
import Router from "./routers/dataBarang.js";

//init express
const app = express();

//use router
app.use(Router);

app.listen(5000, () => console.log('Server Running at http://localhost:=5000'));
