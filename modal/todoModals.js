const mongoose = require("mongoose")

const todoModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"title is required"],
        maxlength: [200,"Your maximum length is 200"],
        trim :true,
    },
    // task : [String],
  }, {
        timestamps: true
    }
);

module.exports = mongoose.model("todo",todoModel);
