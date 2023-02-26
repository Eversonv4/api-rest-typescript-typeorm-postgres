import { AppDataSource } from "../data-source";
import { Room } from "../entities";

export const roomRepository = AppDataSource.getRepository(Room);
