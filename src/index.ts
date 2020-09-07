//Env
require("dotenv").config();
//Core
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
//Schema
import { resolvers, typeDefs } from "./graphql";
import { connectDatabase } from './database';

const mount = async(app:Application) => {
    const db  = await connectDatabase();

    const server = new ApolloServer({ resolvers, typeDefs, context: () => ({db}) });
    server.applyMiddleware({ app, path: "/api" });

    app.listen(process.env.PORT);

    const listings = await db.listings.find({}).toArray();
    console.log(listings);
}

mount(express());
