const path = require("path");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

const BUILD_DIR = path.join(process.cwd(), "build");

const app = express();

app.use(compression());
app.use(express.static("public", { maxAge: "1h" }));
app.use(morgan("tiny"));

app.all(
  "*",
  createRequestHandler({
    build: require(BUILD_DIR),
    mode: process.env.NODE_ENV
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});