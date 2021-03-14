import Telefone from "../infra/typeorm/entities/Telefone";

export default interface IAlunoDTO {
  nome: string;
  matricula: string;
  data_nascimento: Date;
  id_campus: number;
  id_curso: number;
}
