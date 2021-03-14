import IAlunosRepository from "@modules/alunos/repositories/IAlunosRepository";
import { getRepository, Repository, Not, Between } from "typeorm";

import Aluno from "../entities/Aluno";

import IAlunoDTO from "../../../dtos/IAlunoDTO";
import IPhoneDTO from "@modules/alunos/dtos/IPhoneDTO";
import Telefone from "../entities/Telefone";

class AlunosRepository implements IAlunosRepository {
  private ormRepository: Repository<Aluno>;
  private ormRepositoryPhone: Repository<Telefone>;

  constructor() {
    this.ormRepository = getRepository(Aluno);
    this.ormRepositoryPhone = getRepository(Telefone);
  }

  public async create(alunoData: IAlunoDTO): Promise<Aluno> {

    const aluno = this.ormRepository.create(alunoData);

    await this.ormRepository.save(aluno);

    return aluno;
  }

  public async createPhone(data: IPhoneDTO): Promise<Telefone>{

    const phone = this.ormRepositoryPhone.create(data);

    await this.ormRepositoryPhone.save(phone);

    return phone;
  }


  public async index(): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find();

    return alunos;
  }

  public async indexForCampus(campus: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where: {id_campus: campus}
    });

    return alunos;
  }

  public async indexForCurso(curso: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where: {id_curso: curso}
    });

    return alunos;
  }

  public async indexForCursoCampus(curso: string, campus: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where : [{ id_curso : curso, id_campus : campus}
              ]});

    return alunos;
  }

  public async indexForDate(data_inicial: string, data_final: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where : [{ data_nascimento: Between(data_inicial, data_final)}
              ]});

    return alunos;
  }

  public async indexForCursoDate(curso: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where : [{ data_nascimento: Between(data_inicial, data_final), id_curso : curso}
              ]});

    return alunos;
  }

  public async indexForCampusDate(campus: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where : [{ data_nascimento: Between(data_inicial, data_final), id_campus : campus}
              ]});

    return alunos;
  }

  public async indexForCampusDateCurso(campus: string, curso: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({
      where : [{ data_nascimento: Between(data_inicial, data_final), id_campus : campus, id_curso : curso}
              ]});

    return alunos;
  }



  public async show(matricula: string): Promise<Aluno | undefined> {
    const aluno = await this.ormRepository.findOne({
      where: {matricula}
    });

    return aluno;
  }

  public async showPhone(id_aluno: number): Promise<Telefone | undefined> {
    const telefone = await this.ormRepositoryPhone.findOne({
      where: {id_aluno}
    });
    return telefone;
  }


  public async showForIndex(id_aluno: number): Promise<Aluno | undefined> {
    const aluno = await this.ormRepository.findOne(id_aluno);

    return aluno;
  }


  public async save(aluno: Aluno): Promise<Aluno> {
    return await this.ormRepository.save(aluno);
  }  


  public async savePhone(telefone: Telefone): Promise<Telefone> {
    return await this.ormRepositoryPhone.save(telefone);
  }  

  public async  deleteUsers(aluno: Aluno): Promise<Aluno> {
    return this.ormRepository.remove(aluno);
  }
}

export default AlunosRepository;
