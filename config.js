const config = {
  dbUrl:
    "mongodb+srv://" +
    process.env.USER +
    ":" +
    process.env.PASS +
    "@" +
    process.env.CLUSTER +
    "/<" +
    process.env.BD +
    ">?retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
};

module.exports = config;
