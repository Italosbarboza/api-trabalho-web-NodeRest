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
class IndexCursoService {
  constructor(
    @inject("CursosRepository")
    private cursosRepository: ICursosRepository
  ) {}

  public async execute(): Promise<Curso[] | undefined> {

    const cursos = await this.cursosRepository.index();

    return cursos;
  }
}

export default IndexCursoService;
