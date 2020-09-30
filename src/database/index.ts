import { Database } from "./../lib/types";
import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db();
    return {
      listings: db.collection("listings"),
    };
  } catch (error) {
    throw error;
  }
};
