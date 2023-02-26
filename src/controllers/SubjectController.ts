import { Request, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepository";

class SubjectController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ message: "The name is required!" });
    }

    try {
      const newSubject = subjectRepository.create({ name });

      await subjectRepository.save(newSubject);

      return response.status(201).json(newSubject);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}

const subjectController = new SubjectController().create;

export { subjectController };
