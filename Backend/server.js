const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 8000;
const cors = require('cors');


const app = express();
app.use(express.json());
dotenv.config();


(async () =>  {
    try {
await mongoose.connect('mongodb+srv://henockso111:Thomasso111@cluster0.gtqjpet.mongodb.net/?retryWrites=true&w=majority');
    console.log("connected to database");
    } catch (console) {
        console.log(error)
    }
})();   

app.get('/', function  (req, res) {
    try {
        const  connection = 'working on this port';
        res.send(connection); 
        
}catch (error) {
    console.log(error)

}
})








app.listen(port, () => {
    console.log(`Server is running  ${port}`);
  });