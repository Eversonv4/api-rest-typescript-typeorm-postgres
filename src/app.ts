import express from "express";
import { AppDataSource } from "./data-source";
import { routes } from "./routes/routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.use(routes);

    app.listen(3000, () => console.log("It's working!"));
  })
  .catch((error) => console.log(error));
