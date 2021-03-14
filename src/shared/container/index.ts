import { container } from "tsyringe";

import ICursosRepository from "@modules/cursos/repositories/ICursosRepository";
import CursosRepository from "@modules/cursos/infra/typeorm/repositories/CursosRepository";

import ICampusRepository from "@modules/campus/repositories/ICampusRepository";
import CampusRepository from "@modules/campus/infra/typeorm/repositories/CampusRepository";

import IAlunosRepository from "@modules/alunos/repositories/IAlunosRepository";
import AlunosRepository from "@modules/alunos/infra/typeorm/repositories/AlunosRepository";

container.registerSingleton<ICursosRepository>(
  "CursosRepository",
  CursosRepository,
);

container.registerSingleton<ICampusRepository>(
  "CampusRepository",
  CampusRepository,
);

container.registerSingleton<IAlunosRepository>(
  "AlunosRepository",
  AlunosRepository,
);