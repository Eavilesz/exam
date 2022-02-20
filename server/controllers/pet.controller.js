const { response, request } = require("express");
const { Pet } = require("../models/pet.model");

//Esto es para imprimir todos los documentos de la coleccion
module.exports.findAllPets = (request, response) => {
  Pet.find()
    .then((allPets) => response.json({ pet: allPets }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

//Esto es para que muestre los detalles de un peto en particular
module.exports.getPet = (request, response) => {
  Pet.findOne({ _id: request.params.id })
    .then((pet) => response.json(pet))
    .catch((err) => response.json(err));
};

module.exports.createPet = (request, response) => {
  const { name, type, description, skill1, skill2, skill3, likes } =
    request.body;
  Pet.create({
    name,
    type,
    description,
    skill1,
    skill2,
    skill3,
    likes,
  })
    .then((pet) => response.json(pet))
    .catch((err) => response.status(400).json(err));
};

module.exports.updatePet = (request, response) => {
  Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true, //Esto enciende las validaciones en la edicion de un documento
  })
    .then((updatePet) => response.json(updatePet))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePet = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
