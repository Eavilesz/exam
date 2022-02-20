import React, { useEffect, useState } from "react";
import axios from "axios";
import PetForm from "../components/PetForm";
import { useNavigate } from "react-router-dom";

export default () => {
  const [pets, setPets] = useState([]);
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const createPet = (pet) => {
    axios
      .post("http://localhost:8000/api/pet", pet)
      .then((res) => {
        setPets([...pets, res.data]);
      })
      .then((res) => navigate("/pet/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };
  return (
    <div>
      <h2>Add a new pet</h2>
      {errors.map((err, index) => (
        <p className="p-3 mb-2 bg-danger text-white col-3 m-auto" key={index}>
          {err}
        </p>
      ))}
      <PetForm
        onSubmitProp={createPet}
        initialName=""
        initialType=""
        initialDescription=""
        initialSkill1=""
        initialSkill2=""
        initialSkill3=""
        initialLikes={0}
      />
    </div>
  );
};
