const { json } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT;
const router = require('./Routers/router')

app.use(json());
app.use('/', router)

app.listen(port, () => console.log(`API online em: http://localhost:${port}`));
