import type { Resolvers } from "../types/schema";

export interface GraphQLContext {
  test: true;
}

export const resolvers: Resolvers<GraphQLContext> = {
  Query: {
    request: () => {
      return {
        domain: { slug: "/" },
        site: { slug: "/" },
        page: { slug: "/" },
      };
    },
  },
};
