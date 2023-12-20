import esxpress from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainroutes from "./routes/index";

dotenv.config();

const server = esxpress();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(esxpress.static(path.join(__dirname, "../public")));

//Rotas
server.use(mainroutes);
server.use((req, res) => {
  res.send("Página não encontrada.");
});
server.listen(process.env.PORT);
