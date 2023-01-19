import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema/schema.graphql",
  generates: {
    types: {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "../types/schema.ts",
        filename: "types/schema.ts",
      },
      plugins: [
        // { add: { content: "/* eslint-disable */" } },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
};

export default config;
