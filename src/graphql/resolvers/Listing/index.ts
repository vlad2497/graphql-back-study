import { ObjectID } from "mongodb";
import { Database, Listing, ListingInput } from "./../../../lib/types";
import { IResolvers } from "apollo-server-express";

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      try {
        return await db.listings.find({}).toArray();
      } catch (error) {
        throw error;
      }
    },
    listing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing | null> => {
      try {
        return await db.listings.findOne({ _id: new ObjectID(id) });
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createListing: async (
      _root: undefined,
      { input }: { input: ListingInput },
      { db }: { db: Database }
    ): Promise<Listing | null> => {
      try {
        const new_objID = new ObjectID();
        await db.listings.insertOne({ _id: new_objID, ...input });
        return await db.listings.findOne({ _id: new_objID });
      } catch (error) {
        throw error;
      }
    },
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      try {
        const deleteRes = await db.listings.findOneAndDelete({
          _id: new ObjectID(id),
        });
        if (!deleteRes.value) throw new Error("failed to delete!");
        return deleteRes.value;
      } catch (error) {
        throw error;
      }
    },
  },
  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
};
