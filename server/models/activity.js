const mongoose = require('mongoose'),
    ReviewSchema = require('./review');

const ActivitySchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Type is required!"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"]
    },
    units: {
        type: String,
        required: [true, "Units are required"]
    },
    reviews: [ReviewSchema]
}, {timestamps: true }); //dont need this for the exam

mongoose.model("Activity", ActivitySchema); //Schema is the collection(Table)