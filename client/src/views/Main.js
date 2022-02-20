import React, { useEffect, useState } from "react";
import axios from "axios";
import PetList from "../components/PetList";
export default () => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/all-pets").then((res) => {
      setPets(res.data.pet);
      setLoaded(true);
      console.log(pets);
    });
  }, []);
  const removeFromDom = (petId) => {
    setPets(pets.filter((pet) => pet._id !== petId));
  };
  return (
    <div>
      {errors.map((err, index) => (
        <p className="p-3 mb-2 bg-danger text-white col-4 m-auto" key={index}>
          {err}
        </p>
      ))}
      {loaded && <PetList pets={pets} removeFromDom={removeFromDom} />}
    </div>
  );
};
