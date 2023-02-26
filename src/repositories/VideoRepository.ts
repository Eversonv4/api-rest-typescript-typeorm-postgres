import { AppDataSource } from "../data-source";
import { Video } from "../entities";

export const videoRepository = AppDataSource.getRepository(Video);
