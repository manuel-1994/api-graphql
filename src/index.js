const app = require("./app");
const config = require("./config/environments");

const main = async () =>{
  await app.listen(config.port);
  console.log(`App running on: http://localhost:${config.port}`);
};

main();