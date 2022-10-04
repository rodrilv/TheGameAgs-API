const mongoose = require("mongoose");
const options = {
  autoIndex: false,
  maxPoolSize: 2,
  family: 4,
};
function connect() {
  mongoose.connect(process.env.URLDB, options, (err) => {
    err
      ? () => {
          console.log("Couldn't reach database, retrying...");
          connect();
        }
      : console.log("Database successfully connected.");
  });
}
connect();
