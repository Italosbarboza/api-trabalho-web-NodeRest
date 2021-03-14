import { injectable, inject } from "tsyringe";

import Campus from "@modules/campus/infra/typeorm/entities/Campus";
import ICampusRepository from "../repositories/ICampusRepository";
import AppError from "@shared/errors/AppError";
import ICursosRepository from "@modules/cursos/repositories/ICursosRepository";
import Curso from "@modules/cursos/infra/typeorm/entities/Curso";

interface IRequest {
  codigo_campus: string;
  nome: string;
  cidade: string;
  cursos: Curso[];
}

@injectable()
class CreateCampusService {
  constructor(
    @inject("CampusRepository")
    private campusRepository: ICampusRepository,
    @inject("CursosRepository")
    private cursosRepository: ICursosRepository
  ) {}

  public async execute({ codigo_campus, nome, cidade, cursos }: IRequest): Promise<Campus | undefined> {

    const searchForId = await this.campusRepository.showCodigo(codigo_campus);

    if(searchForId) {
      throw new AppError('Já existe uma universidade cadastrada com esse código. Por favor, inserir outro código');
    }

    if(!cursos) {
      throw new AppError('Selecione, no mínimo, um curso, para cadastro de uma nova universidade');
    }

    const campus = await this.campusRepository.create({
        codigo_campus,
         nome, 
         cidade, 
    });

    await Promise.all(cursos.map(async curso => { 
                        const cursoDTO = {
                          nome: curso.nome,
                          turno: curso.turno,
                          id_campus: campus.id_campus
                        }
                        await this.cursosRepository.create(cursoDTO);      
    }));

    const campusFind = await this.campusRepository.show(campus.id_campus);

    return campusFind;
  }
}

export default CreateCampusService;
