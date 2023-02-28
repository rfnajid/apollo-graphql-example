import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express = require('express');
import { createServer } from 'http';
import MovieResolver from './graphql/resolvers/movie';
import { rootSchema } from './graphql/schema';
import { movieSchema } from './graphql/schema/movie';
import bodyParser = require('body-parser');

require('dotenv').config();

const PORT = parseInt(process.env.APP_PORT);


async function startServer(){
    const app = express();

    const schema = makeExecutableSchema({
        resolvers: [MovieResolver],
        typeDefs: [rootSchema, movieSchema],
    });

    const apolloServer = new ApolloServer({
        schema: schema,
        introspection: true,
    }); 
    
    await apolloServer.start();

    app.use(
        cors(),
        bodyParser.json(),
        expressMiddleware(apolloServer)
    )

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}....`);
    });
}

startServer();
