import { injectable, inject } from "tsyringe";

import Curso from "@modules/cursos/infra/typeorm/entities/Curso";
import ICursosRepository from "../repositories/ICursosRepository";
import ICursoDTO from "../dtos/ICursoDTO";

interface IRequest {
    codigo_curso: string; 
    nome: string; 
    turno: string; 
}

@injectable()
class CreateCursoService {
  constructor(
    @inject("CursosRepository")
    private cursosRepository: ICursosRepository
  ) {}

  public async execute({ codigo_curso, nome, turno }: IRequest): Promise<Curso> {

    const curso = await this.cursosRepository.create({
        codigo_curso, 
        nome, 
        turno,
    });

    return curso;
  }
}

export default CreateCursoService;
