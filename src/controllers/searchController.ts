import { Request, Response } from "express";
import { pet } from "../models/Pet";
import { createMenu } from "../helpers/createMenuObjects";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  let list = pet.getFromName(query);

  if (!query) {
    res.redirect("/");
    return;
  }
  res.render("pages/page", {
    menu: createMenu(""),
    list,
    query,
  });
};
