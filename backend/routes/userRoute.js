const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/userModel");

const router = express.Router();

// Create operation: User input from UI, stored in the backend // 
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      const userAdded = await User.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(201).json(userAdded);  // Correct status and JSON response
    } catch (error) {
      res.status(400).json({ error: error.message });  // Correct status for errors
    }
  });
  
  // Read operation: To read/Get all the data stored in the backend
router.get("/", async (req, res) => {
    try {
      const showAll = await User.find();
      res.status(200).json(showAll);  // Correct status and JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });  // Correct status for errors
    }
  });
  
  // get single user // 
  router.get("/:id", async (req, res) => { // Load up the user with the id in the URL // 
    const {id} = req.params; // To get the id from URL we use req.params, ig you want to get the id from the input entered by the user then use req.body // 
    try{
      const singleUser = await User.findByIdAndDelete({_id: id});
      res.status(200).json(singleUser);  // Correct status and JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });  // Correct status for errors
    }
  });

  // Delete user // 
  router.delete("/:id", async (req, res) => {  // Delete the user with the id in the URL // 
    const {id} = req.params; 
    try{
      const singleUser = await User.findByIdAndDelete({_id: id});  // _id is the default id that the database gives to the user and this id is the id that the user has given through the URL // 
      // so apan idhar _id ko url ki id assign kar rhe hai and then from there we are picking up the user data for that id // 
      res.status(200).json(singleUser);  // Correct status and JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });  // Correct status for errors
    }
  });

  // Update operation: Put/Patch // 
  router.patch("/:id", async (req, res) => {  // Delete the user with the id in the URL // 
    const {id} = req.params; 
    const {name,email,age} = req.body; // Changes are given here // 
    try{
      const updateUser = await User.findByIdAndUpdate(id,req.body,{ // Changes will be reflected // 
        new:true
    });  // _id is the default id that the database gives to the user and this id is the id that the user has given through the URL // 
      // so apan idhar _id ko url ki id assign kar rhe hai and then from there we are picking up the user data for that id // 
      res.status(200).json(updateUser);  // Correct status and JSON response
    } catch (error) {
      res.status(500).json({ error: error.message });  // Correct status for errors
    }
  });

  module.exports = router;