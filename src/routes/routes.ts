import { Request, Response, Router } from "express";
import { roomController } from "../controllers/RoomController";
import { subjectController } from "../controllers/SubjectController";

const routes = Router();

routes.post("/subject", subjectController);
routes.post("/room", roomController.createRoom);
routes.get("/room", roomController.list);
routes.post("/room/:idRoom/create", roomController.createVideo);
routes.post("/room/:idRoom/subject", roomController.roomToSubject);

export { routes };
