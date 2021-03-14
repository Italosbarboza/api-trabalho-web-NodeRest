import { injectable, inject } from "tsyringe";

import Campus from "@modules/campus/infra/typeorm/entities/Campus";
import ICampusRepository from "../repositories/ICampusRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class UpdateCampusService {
  constructor(
    @inject("CampusRepository")
    private campusRepository: ICampusRepository
  ) {}

  public async execute(codigo: string): Promise<Campus | undefined> {
    const campus = await this.campusRepository.showCodigo(codigo);

    if(!campus) {
      throw new AppError('Selecione um campus válido');
    }

    return campus;
  }
}

export default UpdateCampusService;
