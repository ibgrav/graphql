import type { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { join } from "path";
import { buildSchema, graphql } from "graphql";
import { getBodyFromReq } from "./get-body-from-req";
import { GraphQLContext, resolvers } from "./resolvers";

const typeDefs = fs.readFileSync(join(process.cwd(), "schema/schema.graphql"), "utf-8");
const schema = buildSchema(typeDefs);

interface RequestBody {
  operationName: string;
  variables: Record<string, string | number>;
  query: string;
}

export async function handlerGraphQL(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("content-type", "application/json");

  try {
    const context: GraphQLContext = { test: true };

    const body = await getBodyFromReq(req);
    const { operationName, variables, query } = JSON.parse(body) as RequestBody;

    const { data, errors } = await graphql({
      schema,
      operationName,
      source: query,
      rootValue: resolvers.Query,
      contextValue: context,
      variableValues: variables,
    });

    if (errors) {
      const error = JSON.stringify({ errors });

      console.error(error);

      res.statusCode = 400;
      res.end(error);
    } else {
      res.statusCode = 200;
      res.end(JSON.stringify({ data }));
    }
  } catch (e) {
    console.error(e);

    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server error" }));
  }
}
