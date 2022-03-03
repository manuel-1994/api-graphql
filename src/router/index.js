const { Router } = require("express");
const graphql = require("./graphql.routes");
const userRouter = require("./users.routes");

const router = Router();

userRouter(router);
graphql(router);

module.exports = router;