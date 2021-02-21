"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var path_1 = __importDefault(require("path"));
var typeDefs_1 = require("./graphql/schema/typeDefs");
var resolvers_1 = require("./graphql/resolvers/resolvers");
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var connect_1 = __importDefault(require("./connect"));
var scraper_1 = require("./helpers/scraper");
dotenv_1.default.config();
var PORT = 5000;
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: function (_a) {
        var req = _a.req, res = _a.res;
        return ({ req: req, res: res });
    },
});
var app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
server.applyMiddleware({ app: app });
scraper_1.get_tickets('6031cad12260322fd75a6c93');
//Push updates to client every 30 seconds
//setInterval(async () => {
//    wss.clients.forEach(async (client) => {
//        const tickets = await Tickets.find({}).sort({_id:-1}).limit(1);
//        client.send(JSON.stringify(tickets));
//    });
//    console.log('Update Pushed');
//}, 30000);
//scraper.get_tickets('https://www.moshtix.com.au/v2/event/splendour-in-the-grass-2020/119191');
//Scrape the website every 10 minutes
// setInterval(async () => {
//     console.log('Scraping Website');
//     await scraper.get_splendour_tickets('https://www.moshtix.com.au/v2/event/splendour-in-the-grass-2020/119191')
// }, 600000)
var db = "mongodb" + process.env.MONGO_TYPE + "://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@" + process.env.MONGO_HOST + "/" + process.env.MONGO_DB + "?retryWrites=true&w=majority";
connect_1.default(db);
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:" + PORT);
});
