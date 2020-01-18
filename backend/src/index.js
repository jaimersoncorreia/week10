const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const { login, senha, banco } = require("./acesso");

mongoose.connect(
  `mongodb+srv://${login}:${senha}@cluster0-umvxo.mongodb.net/${banco}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.use(express.json());
app.use(routes);

app.listen(3333);

/*

Métodos HTTP: GET, POST, PUT, DELETE

 Tipos de parâmetros

 Query Params: request.query (Filtros, ordenação, paginação, ...)
 Route Params: request.params (Identificar um recurso na alteração ou remoção)
 Body: request.body (Dados para criação ou alteração de um registro)
app.post("/user", (request, response) => {
  console.log(request.body);
  return response.json({ mensage: "Hello Week 10" });
});


    #Usando Route Params#
    app.delete("/user/:id", (request, response) => {
    console.log(request.params);
    return response.json({ mensage: "Hello World" });
    }); 
 
    #usando o metodo Query Params#
    app.get("/", (request, response) => {
    console.log(request.query);
    return response.json({ mensage: "Hello World" });
    });
*/
