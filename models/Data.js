const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        address: {
            type: String,
        },

        about: {
            type: String,
        },
    });

module.exports = mongoose.model("Data", DataSchema);