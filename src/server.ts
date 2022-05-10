import express, { Request, Response } from "express";
import "dotenv/config";
import path from "path";

const server = express();

server.use(express.static(path.join(__dirname, "..", "public")));

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.get("/", (req: Request, res: Response) => {
	res.render("index");
});

server.listen(process.env.PORT);
