import { routesBR } from "./service/consumet/brazilianVersion/routes";
import { routesEN } from "./service/consumet/englishVersion/routes";
import express from "express";

const app = express();
const port = 3000;

app.use('/', routesBR);
app.use('/', routesEN);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
