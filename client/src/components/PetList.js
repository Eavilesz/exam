// import DeleteButton from "./DeleteButton";

import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

export default (props) => {
  const navigate = useNavigate();
  const [pet, setPet] = useState([]);
  // console.log(props);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all-pets")
      .then((res) => setPet(res.data.pet));
  }, []);
  const removeFromDom = (petId) => {
    setPet(pet.filter((pet) => pet._id != petId));
  };
  return (
    <div className=" mb-3 col-3 m-auto">
      <div style={{ marginLeft: "10rem" }}>
        <Link to="/pet/add" className="text-secondary">
          Add a pet
        </Link>
      </div>
      <h2>These pets are looking for a good home</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {pet.map((pet, idx) => {
          return (
            <tbody>
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  {/* <DeleteButton
                    petId={pet._id}
                    successCallback={() => removeFromDom(pet._id)}
                  /> */}
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={(e) => navigate("/pet/" + pet._id)}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info mr-1"
                    onClick={(e) => navigate("/pet/" + pet._id + "/edit")}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
