const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: "string",
      required: [true, "Please, provide a text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
