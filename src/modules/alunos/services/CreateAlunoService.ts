import { injectable, inject } from "tsyringe";

import IAlunosRepository from "../repositories/IAlunosRepository";
import ICampusRepository from "@modules/campus/repositories/ICampusRepository";
import ICursosRepository from "@modules/cursos/repositories/ICursosRepository";
import Aluno from "../infra/typeorm/entities/Aluno";
import AppError from "@shared/errors/AppError";
import Telefone from "../infra/typeorm/entities/Telefone";

interface IRequest {
  nome: string;
  matricula: string;
  data_nascimento: string;
  id_campus: number;
  id_curso: number;
  telefone: Telefone;
}

@injectable()
class CreateAlunoService {
  constructor(
    @inject("AlunosRepository")
    private alunosRepository: IAlunosRepository,

    @inject("CampusRepository")
    private campusRepository: ICampusRepository,
    
    @inject("CursosRepository")
    private cursosRepository: ICursosRepository
  ) {}

  public async execute({ nome, matricula, data_nascimento, id_campus, id_curso, telefone }: IRequest): Promise<Aluno | undefined> {

    const matriculaSearch = await this.alunosRepository.show(matricula);

    if(matriculaSearch) {
      throw new AppError('Matrícula já existente. ');
    }

    const campusSearch = await this.campusRepository.show(id_campus);

    if(!campusSearch) {
      throw new AppError('Campus não existente. ');
    }

    const cursoSearch = await this.cursosRepository.show(id_curso);

    if(!cursoSearch) {
      throw new AppError('Curso não existente. ');
    }

    if(cursoSearch.id_campus !== campusSearch.id_campus) {
      throw new AppError('O curso selecionado não existe no seu campus. Por favor, selecione um curso disponível no seu campus. ');
    }

    const aluno = await this.alunosRepository.create({
        nome,
        matricula, 
        data_nascimento,
        id_campus,
        id_curso
    });

      const telefoneSalvar = {
        id_aluno: aluno.id_aluno,
        operadora: telefone.operadora,
        ddd: telefone.ddd,
        numero: telefone.numero
      }
      const telefoneSave = await this.alunosRepository.createPhone(telefoneSalvar);

    let alunoSearch: any;

    if(aluno) {
        alunoSearch = this.alunosRepository.showForIndex(aluno.id_aluno);
    }

    return alunoSearch;
  }
}

export default CreateAlunoService;
