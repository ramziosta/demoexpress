import express from "express";
import ufo from "./ufo.js";

// create an express append

const app = express();
const PORT = 3000;

// get  get data
//put   change information 
//post  add data
//delete delete data

// app.get()
// app.post()
// app.put
// app.delete
 
//app.get( A,B,C)
//A: is the main path of the server we want to reach
//B: for the middleware like authentication
//C: call back function will be app.get(A,C) if no middleware is used


// app.get("/", ()=>{
// res.send("ExpressJS");
// });

//req is all information coming in req.query req.params
//res  send the information back from the request

//make sure app is listening to the responf

app.listen(PORT,console.log(`express running on ${PORT}`));

// app listens to the port and takes a call back fiunction

// ufo from here

// app.get("/",(req,res) =>{ 
//   res.json(ufo);
// });

// if you want to return just a certain entry.  request uses querry and params :use params

//app.get("/ufo/:state",(req,res) =>{ 
  //  res.json(ufo);
//});

//edit the send


app.get("/ufo", (req,res)=>{
 res.send(req.params);
});
