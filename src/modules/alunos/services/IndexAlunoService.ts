import { injectable, inject } from "tsyringe";

import Curso from "@modules/cursos/infra/typeorm/entities/Curso";
import IAlunosRepository from "../repositories/IAlunosRepository";
import Aluno from "../infra/typeorm/entities/Aluno";

@injectable()
class IndexAlunoService {
  constructor(
    @inject("AlunosRepository")
    private alunosRepository: IAlunosRepository,
  ) {}

  public async execute(campus: string, curso: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined> {
    let aluno;
    
    aluno = await this.alunosRepository.index();

    // OBS: CÓDIGO PODE SER OTIMIZADO!

    if(campus !== 'undefined' && campus) {
      aluno = await this.alunosRepository.indexForCampus(campus);
    }

    if(curso !== 'undefined' && curso) {
      aluno = await this.alunosRepository.indexForCurso(curso);
    }

    if(data_inicial !== 'undefined' && data_inicial && data_final !== 'undefined' && data_final) {
      aluno = await this.alunosRepository.indexForDate(data_inicial, data_final);
    }

    if(campus !== 'undefined' && campus && curso !== 'undefined' && curso) {
      aluno = await this.alunosRepository.indexForCursoCampus(curso, campus);
    }

    if(curso !== 'undefined' && curso && data_inicial !== 'undefined' && data_inicial && data_final !== 'undefined' && data_final) {
      aluno = await this.alunosRepository.indexForCursoDate(curso, data_inicial, data_final);
    }

    if(campus !== 'undefined' && campus && data_inicial !== 'undefined' && data_inicial && data_final !== 'undefined' && data_final) {
      aluno = await this.alunosRepository.indexForCampusDate(campus, data_inicial, data_final);
    }

    if(campus !== 'undefined' && campus && data_inicial !== 'undefined' && data_inicial && data_final !== 'undefined' && data_final && curso !== 'undefined' && curso) {
      aluno = await this.alunosRepository.indexForCampusDateCurso(campus, curso, data_inicial, data_final);
    }

    return aluno;
  }
}

export default IndexAlunoService;
