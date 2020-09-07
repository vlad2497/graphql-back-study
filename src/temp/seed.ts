require("dotenv").config();

import { ObjectID } from 'mongodb';
import { connectDatabase } from './../database';
import { Listing } from './../lib/types';

const seed = async() => {
    try{
        console.log('[seed] : running.......');
        const db = await connectDatabase();
        const listings: Listing[] = [
            {
                _id: new ObjectID(),
                title: "Title 1",
                price: 200,
              },
              {
                _id: new ObjectID(),
                title: "Title 2",
                price: 200,
              },
              {
                _id: new ObjectID(),
                title: "Title 3",
                price: 300,
              },
        ]
        for(const listing of listings){
            await db.listings.insertOne(listing);
        }
        console.log("success");
    }catch{
        throw new Error('fail!!!')
    }
}

seed();