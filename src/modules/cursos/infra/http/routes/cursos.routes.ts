import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import CursosController from "../controllers/CursosController";

const cursosRouter = Router();
const cursosController = new CursosController();

cursosRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      codigo_curso: Joi.string().required(),
      nome: Joi.string().required(),
      turno: Joi.string().required()
    },
  }),
  cursosController.create,
);

cursosRouter.get("/", cursosController.index);

export default cursosRouter;
