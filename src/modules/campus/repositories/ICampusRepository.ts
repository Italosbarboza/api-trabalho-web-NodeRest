import Campus from "../infra/typeorm/entities/Campus";
import ICampusDTO from "../dtos/ICampusDTO";

export default interface ICursosRepository {
  create(data: ICampusDTO): Promise<Campus>;
  index(): Promise<Campus[] | undefined>;
  show(id_campus: number): Promise<Campus | undefined>;
  save(curso: Campus): Promise<Campus>;
  showCodigo(codigo_campus: string): Promise<Campus | undefined>;
  deleteCampus(campus: Campus): Promise<Campus>;
}
