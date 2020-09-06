import { listings } from "./../listings";

export const resolvers = {
  Query: {
    listings: () => listings,
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      const listing = listings.find((item) => item.id === id);
      if (listing) return listings.splice(+listing.id, 1)[0];
      throw new Error("failed to delete listing !");
    },
  },
};
