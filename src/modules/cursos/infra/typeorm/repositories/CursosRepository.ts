import ICursosRepository from "@modules/cursos/repositories/ICursosRepository";
import { getRepository, Repository } from "typeorm";

import Curso from "../entities/Curso";

import ICursoDTO from "../../../dtos/ICursoDTO";

class CursosRepository implements ICursosRepository {
  private ormRepository: Repository<Curso>;

  constructor() {
    this.ormRepository = getRepository(Curso);
  }

  public async create(cursoData: ICursoDTO): Promise<Curso> {
    const curso = this.ormRepository.create(cursoData);

    await this.ormRepository.save(curso);

    return curso;
  }

  public async index(): Promise<Curso[] | undefined> {
    const cursos = this.ormRepository.find();

    return cursos;
  }

  public async show(id_curso: number): Promise<Curso | undefined> {
    const curso = this.ormRepository.findOne(id_curso);

    return curso;
  }

  public async save(curso: Curso): Promise<Curso> {
    return this.ormRepository.save(curso);
  }

}

export default CursosRepository;
