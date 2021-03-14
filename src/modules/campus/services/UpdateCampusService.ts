import { injectable, inject } from "tsyringe";

import Campus from "@modules/campus/infra/typeorm/entities/Campus";
import ICampusRepository from "../repositories/ICampusRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  codigo: string;
  codigo_campus: string;
  nome: string;
  cidade: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject("CampusRepository")
    private campusRepository: ICampusRepository
  ) {}

  public async execute({
    codigo,
    codigo_campus, 
    nome, 
    cidade
  }: IRequest): Promise<Campus> {
    const campus = await this.campusRepository.showCodigo(codigo);

    if (!campus) {
      throw new AppError("Campus não existe.");
    }

    if(codigo_campus) {
      campus.codigo_campus = codigo_campus;  
    } 

    if(nome) {
      campus.nome = nome;
    }

    if(cidade) {
      campus.cidade = cidade;
    }

    return await this.campusRepository.save(campus);
  }
}

export default UpdateProfileService;
