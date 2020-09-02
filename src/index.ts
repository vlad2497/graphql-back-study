import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";

const app = express();
const port = 9000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello!"));

app.get("/listenings", (req, res) => {
  return res.send(listings);
});

app.post("/delete-listening", (req, res) => {
  const id = req.body.id;
  const listing = listings.find((item) => item.id === id);
  if (listing) return res.send(listings.splice(+listing.id, 1));
  return res.send(listings);
});

app.listen(port);
