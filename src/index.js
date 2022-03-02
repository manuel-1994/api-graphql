const app = require("./app");
const config = require("./config");

const main = async () =>{
  await app.listen(config.port);
  console.log('App running on port: ' + config.port);
};

main();