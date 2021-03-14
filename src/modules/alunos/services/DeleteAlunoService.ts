import { injectable, inject } from "tsyringe";

import Aluno from "@modules/alunos/infra/typeorm/entities/Aluno";
import IAlunosRepository from "../repositories/IAlunosRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteAlunoService {
  constructor(
    @inject("AlunosRepository")
    private alunosRepository: IAlunosRepository,
  ) {}

  public async execute(matricula: string): Promise<Aluno> {
    const aluno = await this.alunosRepository.show(matricula);

    if(!aluno) {
      throw new AppError('Selecione uma matrícula válida');
    }
    
    const alunoDelete = await this.alunosRepository.deleteUsers(aluno);

    return alunoDelete;
  }
}

export default DeleteAlunoService;
