import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateCursoService from "@modules/cursos/services/CreateCursoService";
import IndexCursoService from "@modules/cursos/services/IndexCursoService";

export default class CursosController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { codigo_curso, nome, turno, } = request.body;

    const createCurso = container.resolve(CreateCursoService);

    const curso = await createCurso.execute({
      codigo_curso, 
      nome, 
      turno,
    });

    return response.json(classToClass(curso));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexCursos = container.resolve(IndexCursoService);

    const cursos = await indexCursos.execute();

    return response.json(classToClass(cursos));
  }
  

}
