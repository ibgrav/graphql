import fs from "fs";
import { join } from "path";
import { createServer } from "http";
import { handlerGraphQL } from "./handler-graphql";

const playground = fs.readFileSync(join(process.cwd(), "static/playground.html"), "utf-8");

const server = createServer(async (req, res) => {
  if (req.url?.startsWith("/graphql") && req.method === "POST") {
    handlerGraphQL(req, res);
  } else if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(playground);
  } else {
    res.statusCode = 405; // method not allowed
    res.end();
  }
});

server.listen(4000, "0.0.0.0", () => console.log(`http://localhost:4000/`));

process.on("SIGINT", function () {
  server.close();
  process.exit(0);
});
