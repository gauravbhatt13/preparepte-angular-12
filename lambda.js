const serverlessExpress = require("@vendia/serverless-express");
const app = require("./dist/preparepte/serverless/main");
const serverProxy = serverlessExpress.createServer(app.server);
module.exports.handler = (event, context) => serverlessExpress.proxy(serverProxy, event, context);
