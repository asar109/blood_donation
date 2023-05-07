import { useEffect, useState } from "react";
import axios from "axios";
import ue from "../images/ue.jpg";

function UserExperience() {
  const [reloadExperiences, setReloadExperiences] = useState(false); // new state variable

  useEffect(() => {
    const getExperiences = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/experiences");
      setExperiences(res.data);
    };
    getExperiences();
  }, [reloadExperiences]); // update the effect to include reloadExperiences as a dependency

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:4000/api/v1/addExperience", {
      title,
      description,
    });
    setReloadExperiences(!reloadExperiences); // update reloadExperiences to trigger a reload
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-ue">
      <div className="ue-box">
        <h1 className="ue-h">User Experiences</h1>
        <hr className="HoriLine" />

        <form onSubmit={handleSubmit}>
          <input
            className="ue-tb1"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <textarea
            className="ue-tb2"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
          <button className="ue-btn" type="submit">
            Submit
          </button>
        </form>

        <div class="right-ueB">
          <img className="img-ueB" src={ue} alt="" />
        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "3rem" }}>
        {" "}
        Latest Experinces
      </h1>
      <ul className="experience-list">
        {experiences.map((experience) => (
          <li className="experience-item" key={experience._id}>
            <h2 className="experience-title">{experience.title}</h2>
            <p className="experience-description">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserExperience;
