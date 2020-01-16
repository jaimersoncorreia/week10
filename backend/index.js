const express = require("express");

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
app.post("/user", (request, response) => {
  console.log(request.body);
  return response.json({ mensage: "Hello World" });
});

/*#Usando Route Params#
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

app.listen(3333);
