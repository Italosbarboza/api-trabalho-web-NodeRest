import { injectable, inject } from "tsyringe";

import Aluno from "@modules/alunos/infra/typeorm/entities/Aluno";
import IAlunosRepository from "../repositories/IAlunosRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class ShowAlunoService {
  constructor(
    @inject("AlunosRepository")
    private alunosRepository: IAlunosRepository,
  ) {}

  public async execute(codigo: string): Promise<Aluno | undefined> {
    const alunos = await this.alunosRepository.show(codigo);

    if(!alunos) {
      throw new AppError('Selecione uma matrícula válida');
    }

    return alunos;
  }
}

export default ShowAlunoService;
