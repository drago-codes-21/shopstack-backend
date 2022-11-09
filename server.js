const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// connecting with database
connectDB();

// middleware
app.use(cors());
app.use(morgan("common"));
app.use(helmet());
app.use(express.json({ extented: false }));
app.use("/api/users", require("./routes/userApi"));
app.use("/api/auth", require("./routes/authApi"));
app.use("/api/products", require("./routes/productsApi"));

app.get("/", (req, res) => {
  res.send("My app is up");
});

app.listen(PORT, () => {
  console.log(`server is listenning at port ${PORT}`);
});
