const PetController = require("../controllers/pet.controller");

module.exports = function (app) {
  app.get("/api", PetController.createPet);
  app.get("/api/all-pets", PetController.findAllPets);
  app.get("/api/pet/:id", PetController.getPet);
  app.post("/api/pet", PetController.createPet);
  app.put("/api/pet/:id", PetController.updatePet);
  app.delete("/api/pet/:id", PetController.deletePet);
};
