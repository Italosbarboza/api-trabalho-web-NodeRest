import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import AlunosController from "../controllers/AlunosController";

const alunosRouter = Router();
const alunosController = new AlunosController();

alunosRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      matricula: Joi.string().required(),
      nome: Joi.string().required(),
      data_nascimento: Joi.string().required(),
      id_campus: Joi.number().required(),
      id_curso: Joi.number().required(),
      telefone: Joi.object()
    },
  }),
  alunosController.create,
);

alunosRouter.put(
  "/:matricula",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string(),
      data_nascimento: Joi.date(),
      id_campus: Joi.number(),
      id_curso: Joi.number(),
      telefone: Joi.object()
    },
  }),
  alunosController.update,
);

alunosRouter.get("/", alunosController.index);
alunosRouter.get("/:matricula", alunosController.show);
alunosRouter.delete("/:matricula", alunosController.delete);


export default alunosRouter;
