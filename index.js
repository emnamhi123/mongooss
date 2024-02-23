const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Person = require("./Model/person");

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log("MONGO Connected"));

const PORT = process.env.PORT || 4000;

async function start() {
  const person = await Person.create({
    name: "EMNA",
    age: 32,
    favoriteFoods: ["Pizza"],
  });
}
start();

// person.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })
// start();

async function start() {
  const arrayOfPeoples = [
    { name: "maina", age: 25, favoriteFoods: ["gateau"] },
    { name: "mouna", age: 18, favoriteFoods: ["Hmlewi"] },
  ];

  await Person.create(arrayOfPeoples);
}
start();

async function start() {
  console.log(await Person.find());
}
start();


async function start() {
  console.log(await Person.findOne({ favoriteFoods: ["gateau"] }));
}
start();

async function start() {
  console.log(await Person.findById("65d7a30dd724abb7f1254020"));    
}
start();

async function start() {
  await Person.findByIdAndUpdate("65d7a909a391c02e7b7a1b9b", {
    $push: { favoriteFoods: "hamburger" },
  });
}
start();

async function start(){
    await Person.findOneAndUpdate({name:"maina"},{age:20})
}start()



 async function start(){
    await Person.findOneAndDelete({name:"mouna"})
 }
start()

async function start(){
    await Person.findByIdAndDelete('658d3712cdd0cca2d4bb0431')
}
start()

async function start(){
    await Person.remove()

}
start()


async function start(){
    const specific=await Person.find({favoriteFoods:"burritos"}).sort({name:"EMNA"}).limit(2).select(age:0)
}
start();


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });