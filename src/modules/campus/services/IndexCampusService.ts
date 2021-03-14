import { injectable, inject } from "tsyringe";

import Campus from "@modules/campus/infra/typeorm/entities/Campus";
import ICampusRepository from "../repositories/ICampusRepository";

@injectable()
class IndexCampusService {
  constructor(
    @inject("CampusRepository")
    private campusRepository: ICampusRepository
  ) {}

  public async execute(): Promise<Campus[] | undefined> {
    const campus = await this.campusRepository.index();

    return campus;
    
  }
}

export default IndexCampusService;
