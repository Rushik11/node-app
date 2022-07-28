const express = require("express");
const app = express();
const port =  8000;
const router = require('./routes/getData')

app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`successfully running at ${port}`);
  });
