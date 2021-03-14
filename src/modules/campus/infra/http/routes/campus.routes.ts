import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import CampusController from "../controllers/CampusController";

const campusRouter = Router();
const campusController = new CampusController();

campusRouter.post("/", campusController.create);
campusRouter.get("/", campusController.index);
campusRouter.get("/:codigo", campusController.show);
campusRouter.put(
    "/:codigo",
    celebrate({
      [Segments.BODY]: {
        codigo_campus: Joi.string(),
        nome: Joi.string(),
        cidade: Joi.string(),
      },
    }),
    campusController.update,
  );
  campusRouter.delete("/:codigo", campusController.delete);


export default campusRouter;
