import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
  const [pet, setPet] = useState({});
  const params = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + params.id)
      .then((res) => {
        setPet({
          ...res.data,
        });
        console.log(props);
      })
      .then((res) => console.log(res));
  }, []);

  console.log(pet);
  console.log(props);
  return (
    <div className="card col-3 mb-5 m-auto">
      <div className="card-body">
        <Link to={"/pet/"} className="text-secondary">
          Home
        </Link>
        <h2>{pet.name}</h2>
        <p>Pet type: {pet.type} </p>
        <p>Description: {pet.description}</p>
        {
          <div>
            {" "}
            <h4>Skills:</h4>
            <ul className="list-group">
              {pet.skill1 && <li className="list-group-item">{pet.skill1}</li>}
              {pet.skill2 && <li className="list-group-item">{pet.skill2}</li>}
              {pet.skill3 && <li className="list-group-item">{pet.skill3}</li>}
            </ul>{" "}
          </div>
        }
        &nbsp;&nbsp;
        <DeleteButton
          petId={pet._id}
          petName={pet.name}
          successCallback={() => navigate("/pet/")}
        />
      </div>
    </div>
  );
};
