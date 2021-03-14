import Curso from "../infra/typeorm/entities/Curso";
import ICursoDTO from "../dtos/ICursoDTO";

export default interface ICursosRepository {
  create(data: ICursoDTO): Promise<Curso>;
  index(): Promise<Curso[] | undefined>;
  show(id_curso: number): Promise<Curso | undefined>;
  save(curso: Curso): Promise<Curso>;
}
