import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    price: Int!
  }

  input ListingInput {
    title: String!
    price: Int!
  }

  type Query {
    listing(id: ID!): Listing
    listings: [Listing!]!
  }

  type Mutation {
    createListing(input: ListingInput!): Listing
    deleteListing(id: ID!): Listing!
  }
`;
