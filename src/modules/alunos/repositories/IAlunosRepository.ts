import Aluno from "../infra/typeorm/entities/Aluno";
import IAlunoDTO from "../dtos/IAlunoDTO";
import Telefone from "../infra/typeorm/entities/Telefone";
import IPhoneDTO from "../dtos/IPhoneDTO";

export default interface IAlunosRepository {
  create(data: IAlunoDTO): Promise<Aluno>;
  createPhone(data: IPhoneDTO): Promise<Telefone>;
  index(): Promise<Aluno[] | undefined>;
  indexForCampus(campus: string): Promise<Aluno[] | undefined>;
  indexForCurso(curso: string): Promise<Aluno[] | undefined>;
  indexForDate(data_inicial: string, data_final: string): Promise<Aluno[] | undefined>;
  indexForCursoDate(curso: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined>;
  indexForCampusDate(campus: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined>;
  indexForCampusDateCurso(campus: string, curso: string, data_inicial: string, data_final: string): Promise<Aluno[] | undefined>;
  indexForCursoCampus(curso: string, campus: string): Promise<Aluno[] | undefined>;
  show(matricula: string): Promise<Aluno | undefined>;
  showPhone(id_aluno: number): Promise<Telefone | undefined>;
  save(curso: Aluno): Promise<Aluno>;
  savePhone(telefone: Telefone): Promise<Telefone>;
  showForIndex(id_aluno: number): Promise<Aluno | undefined>;
  deleteUsers(aluno: Aluno): Promise<Aluno>;
}
