const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

class Usuario {
  constructor() {
    this._id = faker.datatype.uuid();
    this.randomName = faker.name.firstName();
    this.randomLastName = faker.name.lastName();
    this.numtel = faker.phone.number();
    this.randomEmail = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this._id = faker.datatype.uuid();
    this.randomName = faker.name.firstName();
    this.direccion = {
      calle: faker.address.direction(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigoPostal: faker.address.zipCode(),
      pais: faker.address.country(),
    };
  }
}

app.get("/api/usuario", (req, res) => {
  //   console.log(nuevoUsuario);
  res.json(new Usuario());
});

app.get("/api/empresa", (req, res) => {
  //   console.log(nuevoUsuario);
  res.json(new Empresa());
});

// esto tiene que estar debajo de los otros bloques de código
app.listen(port, () => console.log(`Listening on port: ${port}`));
