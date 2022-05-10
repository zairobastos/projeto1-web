import express, { Request, Response } from "express";
import "dotenv/config";

const server = express();

server.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

server.listen(process.env.PORT);
