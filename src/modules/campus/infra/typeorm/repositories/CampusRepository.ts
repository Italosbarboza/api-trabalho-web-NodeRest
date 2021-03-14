import ICampusRepository from "@modules/campus/repositories/ICampusRepository";
import { getRepository, Repository, Not } from "typeorm";

import Campus from "../entities/Campus";

import ICampusDTO from "../../../dtos/ICampusDTO";

class CampusRepository implements ICampusRepository {
  private ormRepository: Repository<Campus>;

  constructor() {
    this.ormRepository = getRepository(Campus);
  }

  public async create(cursoData: ICampusDTO): Promise<Campus> {

    const campus = this.ormRepository.create(cursoData);

    await this.ormRepository.save(campus);

    return campus;
  }

  public async index(): Promise<Campus[] | undefined> {
    const campus = await this.ormRepository.find();

    return campus;
  }

  public async show(id_campus: number): Promise<Campus | undefined> {
    
    const campuus = await this.ormRepository.findOne({id_campus});

    return campuus;
  }
  

  public async showCodigo(codigo_campus: string): Promise<Campus | undefined>{
    
    const campus = await this.ormRepository.findOne({
      where: {codigo_campus}
    });

    return campus;
  }

  public async save(campus: Campus): Promise<Campus> {
    return this.ormRepository.save(campus);
  }

  public async  deleteCampus(campus: Campus): Promise<Campus> {
    return this.ormRepository.remove(campus);
  }
}

export default CampusRepository;
