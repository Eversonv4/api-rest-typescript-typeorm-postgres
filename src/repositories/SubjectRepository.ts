import { AppDataSource } from "../data-source";
import { Subject } from "../entities";

export const subjectRepository = AppDataSource.getRepository(Subject);
