import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";
//import Telefone from "../infra/typeorm/entities/Telefone";
import IAlunosRepository from "../repositories/IAlunosRepository";
import ICampusRepository from '@modules/campus/repositories/ICampusRepository';
import ICursosRepository from '@modules/cursos/repositories/ICursosRepository';
import Aluno from "../infra/typeorm/entities/Aluno";
import Telefone from "../infra/typeorm/entities/Telefone";


interface IRequest {
  matricula: string;
  nome: string; 
  data_nascimento: string; 
  id_campus: number; 
  id_curso: number;
  telefone: Telefone;
}

@injectable()
class UpdateAlunoService {
  constructor(
    @inject("AlunosRepository")
    private alunosRepository: IAlunosRepository,

    @inject("CampusRepository")
    private campusRepository: ICampusRepository,
    
    @inject("CursosRepository")
    private cursosRepository: ICursosRepository
  ) {}
  public async execute({ matricula, nome, data_nascimento, id_campus, id_curso, telefone }: IRequest): Promise<Aluno | undefined> {
    
    const matriculaAluno = await this.alunosRepository.show(matricula);

    if(!matriculaAluno) {
      throw new AppError('Matrícula não existente. Digite uma matrícula válida ');
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

    if(nome) {
      matriculaAluno.nome = nome;
    } 

    if(data_nascimento) {
      matriculaAluno.data_nascimento = data_nascimento;
    }

    if(id_campus) {
      matriculaAluno.id_campus = id_campus;
    }

    if(id_campus) {
      matriculaAluno.id_curso = id_curso;
      matriculaAluno.curso = cursoSearch;
    }

    const alu = await this.alunosRepository.save(matriculaAluno);

    if(telefone) {
      const tel = await this.alunosRepository.showPhone(alu.id_aluno);
      
      if(!tel) { 
        throw new AppError('Telefone não existente. ');
      }
        if(telefone.operadora) {
          tel.operadora = telefone.operadora;
        }
        if(telefone.ddd) {
          tel.ddd = telefone.ddd;
        }
        if(telefone.numero) {
          tel.numero = telefone.numero;
        }

      await this.alunosRepository.savePhone(tel);
    }

    const completeAluno = await this.alunosRepository.show(alu.matricula);

    return completeAluno;
  }
}

export default UpdateAlunoService;
