const Data = require("../models/Data");

//CREATE

const Information =  async (req, res ) => {
       const newData = new Data(req.body);
       const info = await newData.save();
       res.status(201).json(info)
   
}
module.exports = {
       Information
}