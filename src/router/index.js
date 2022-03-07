const { Router } = require("express");
const graphql = require("./graphql.routes");

const router = Router();
graphql(router);

module.exports = router;