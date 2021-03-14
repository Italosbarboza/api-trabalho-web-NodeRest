import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateAlunoService from "@modules/alunos/services/CreateAlunoService";
import IndexAlunoService from "@modules/alunos/services/IndexAlunoService";
import UpdateAlunoService from "@modules/alunos/services/UpdateAlunoService";
import ShowAlunoService from "@modules/alunos/services/ShowAlunoService";
import DeleteAlunoService from "@modules/alunos/services/DeleteAlunoService";

export default class AlunosController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, matricula, data_nascimento, id_campus, id_curso, telefone } = request.body;

    const createAluno = container.resolve(CreateAlunoService);

    const aluno = await createAluno.execute({
      nome, 
      matricula, 
      data_nascimento,
      id_campus,
      id_curso,
      telefone
    });

    return response.json(classToClass(aluno));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexAlunos = container.resolve(IndexAlunoService);

    const { campus, curso, data_inicial, data_final } = request.query;

    Date.parse(String(data_inicial));

    const alunos = await indexAlunos.execute(String(campus), String(curso), String(data_inicial), String(data_final));

    return response.json(classToClass(alunos));
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { matricula } = request.params;

    const showaluno = container.resolve(ShowAlunoService);

    const aluno = await showaluno.execute(matricula);

    return response.json(aluno);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { matricula } = request.params;

    const deletealuno = container.resolve(DeleteAlunoService);

    const aluno = await deletealuno.execute(matricula);

    return response.json(aluno);
  }


  public async update(request: Request, response: Response): Promise<Response> {

    const { nome, data_nascimento, id_campus, id_curso, telefone } = request.body;

    const { matricula } = request.params;

    const updateAluno = container.resolve(UpdateAlunoService);

    const aluu = await updateAluno.execute({
      matricula, 
      nome, data_nascimento, 
      id_campus, 
      id_curso,
      telefone
    })
    return response.json(classToClass(aluu));
  }
}
