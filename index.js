//import json library
const jsonServer= require('json-server')

//2)create the server
const mediaplayerserver=jsonServer.create()

// middleware to parse the json format
const middleware =jsonServer.defaults()

// setup path to store data 
const router=jsonServer.router('db.json')

mediaplayerserver.use(middleware)
mediaplayerserver.use(router)


//3)port for server
 const PORT=4000 || process.env.PORT

 //4) to listen to the request from the frontend for resoling that request
 mediaplayerserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
 })