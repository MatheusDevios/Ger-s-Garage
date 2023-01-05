const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", false);
//[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const sericeRoute = require("./routes/service");
const appointmentRoute = require("./routes/appointment");
const slotRoute = require("./routes/slot");
const orderRoute = require("./routes/order");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/services", sericeRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/slots", slotRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req, res) => {
  res.send("APP IS RUNING");
});

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running!");
});
