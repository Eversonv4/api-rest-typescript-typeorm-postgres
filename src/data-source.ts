import { DataSource } from "typeorm";
import * as Entities from "./entities";
import Migrations from "./migrations";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "api-restart",
  entities: Object.values(Entities),
  migrations: [...Migrations],
});
