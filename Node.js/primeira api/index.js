import express from "express";
import { validateParameter } from "./utils/validateParameters.js";

const app = express();

// GET
app.get('/', (request, response) => {

  response.json({ ola: 'opa' });

});

// LISTEN
app.listen(8080, () => {
  let data = new Date();
  console.log(`Servidor node inciado em: ${data}`);
});

