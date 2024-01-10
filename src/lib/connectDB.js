const { default: mongoose } = require("mongoose");

require('dotenv').config();
const connection = {};
console.log("ENV" + process.env.MONGO_URL)
export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using Existing connection");
      return;
    }
    const db = await mongoose.connect(
      "mongodb+srv://joshiakanksha481:886dMnA41BCbFzCe@nextjsproj.xetgtt3.mongodb.net/nextJs14?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    connection.isConnected = true;
  } catch (err) {
    console.log(err);
    // throw new Error(err)
  }
};
