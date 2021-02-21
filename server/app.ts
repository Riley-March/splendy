import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema/typeDefs';
import { resolvers } from './graphql/resolvers/resolvers';
import dotenv from 'dotenv';
import express from 'express';
import connect from './connect';
import { get_tickets } from './helpers/scraper';

dotenv.config();

const PORT = 5000;

const server = new ApolloServer({
	typeDefs,
	resolvers,
    context: ({ req, res }) => ({ req, res }),
});

const app = express();

server.applyMiddleware({app});

get_tickets('6031cad12260322fd75a6c93');

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

const db: string = `mongodb${process.env.MONGO_TYPE}://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

connect(db);

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
});
