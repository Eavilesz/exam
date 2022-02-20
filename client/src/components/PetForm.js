import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default (props) => {
  let navigate = useNavigate();
  const {
    initialName,
    initialType,
    initialDescription,
    initialSkill1,
    initialSkill2,
    initialSkill3,
    initialLikes,
    onSubmitProp,
  } = props;
  //   const [val, setVal] = useState(initialName);
  //keep track of what is being typed via useState hook
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setDescription] = useState(initialDescription);
  const [skill1, setSkill1] = useState(initialSkill1);
  const [skill2, setSkill2] = useState(initialSkill2);
  const [skill3, setSkill3] = useState(initialSkill3);
  const [likes, setLikes] = useState(initialLikes);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //make a post request to create a new product

    onSubmitProp({ name, type, description, skill1, skill2, skill3, likes });
  };
  //onChange to update name
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-floating mb-3 col-3 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Pet Name</label>
      </div>
      <div className="form-floating mb-3 col-3 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Pet type</label>
      </div>
      <div className="form-floating mb-3 col-3 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Pet description</label>
      </div>
      <h2>Skills (Optional)</h2>
      <div className="form-floating mb-3 col-3 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={skill1}
          onChange={(e) => setSkill1(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Skill 1</label>
      </div>
      <div className="form-floating mb-3 col-3 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={skill2}
          onChange={(e) => setSkill2(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Skill 2</label>
      </div>
      <div className="form-floating mb-3 col-3 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={skill3}
          onChange={(e) => setSkill3(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Skill 3</label>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={(e) => navigate("/pet/")}
      >
        Cancel
      </button>
      &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
      <button type="submit" className="btn btn-outline-primary">
        Submit
      </button>
    </form>
  );
};
