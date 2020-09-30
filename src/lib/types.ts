import { ObjectID, Collection } from "mongodb";

export interface Listing {
  _id: ObjectID;
  title: string;
  price: number;
}

export interface ListingInput {
  title: string;
  price: number;
}

export interface Database {
  listings: Collection<Listing>;
}
