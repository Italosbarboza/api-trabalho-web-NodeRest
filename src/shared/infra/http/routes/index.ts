import { Router } from "express";

import cursosRouter from "@modules/cursos/infra/http/routes/cursos.routes";
import campusRouter from "@modules/campus/infra/http/routes/campus.routes";
import alunosRouter from "@modules/alunos/infra/http/routes/alunos.routes";


const routes = Router();

routes.use("/api/cursos", cursosRouter);
routes.use("/api/campi", campusRouter);
routes.use("/api/alunos", alunosRouter);

export default routes;
