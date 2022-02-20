import react from "react";
import axios from "axios";

export default (props) => {
  const { petId, petName, successCallback } = props;
  const deletePet = (e) => {
    axios.delete("http://localhost:8000/api/pet/" + petId).then((res) => {
      successCallback();
    });
  };
  return (
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={deletePet}
    >
      Adopt {petName}
    </button>
  );
};
