import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateCampusService from "@modules/campus/services/CreateCampusService";
import IndexCampusService from "@modules/campus/services/IndexCampusService";
import ShowCampusService from "@modules/campus/services/ShowCampusService";
import UpdateCampusService from "@modules/campus/services/UpdateCampusService";
import DeleteCampusService from "@modules/campus/services/DeleteCampusService";

export default class CampusController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { codigo_campus, nome, cidade, cursos } = request.body;

    const createCampus = container.resolve(CreateCampusService);

    const user = await createCampus.execute({
      codigo_campus, 
      nome, 
      cidade,
      cursos
    });

    return response.json(classToClass(user));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexCampus = container.resolve(IndexCampusService);

    const campus = await indexCampus.execute();

    return response.json(classToClass(campus));
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { codigo } = request.params;

    const showCampus = container.resolve(ShowCampusService);

    const campus = await showCampus.execute(codigo);

    return response.json(campus);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { codigo } = request.params;

    const deleteCampus = container.resolve(DeleteCampusService);

    const campus = await deleteCampus.execute(codigo);

    return response.json(campus);
  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { codigo_campus, nome, cidade } = request.body;

    const { codigo } = request.params;

    const updateCampus = container.resolve(UpdateCampusService);

    const campus = await updateCampus.execute({
      codigo,
      codigo_campus, 
      nome, 
      cidade
    });

    return response.json(classToClass(campus));
  }
}
