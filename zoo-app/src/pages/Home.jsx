import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import AnimalForm from "../components/AnimalForm";
import Counter from "../components/Counter";
import { animals } from "../constants/animals";
import classes from "./Home.module.css";
import axios from "axios";
console.log("before component mount");

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [myanimals, setmyanimals] = useState([]);
  //  const [mynewanimal, setmynewanimal] = useState({});

  const AddAnimal = async (e) => {
    setIsLoading(false);
    e.preventDefault();
    const CloudnaryUrl = "https://api.cloudinary.com/v1_1/dlfvwll5z/upload";
    const myimage = e.target.image.files[0];

    const formData = new FormData();
    formData.append("file", myimage);
    formData.append("upload_preset", "y10dv6rs");

    const response = await axios.post(CloudnaryUrl, formData);
    console.log(response.data.secure_url);

    const newAnimal = {
      name: e.target.name.value,
      description: e.target.description.value,
      image: response.data.secure_url,
    };

    const responseSserver = await axios.post(
      "https://zoo-api-nhvk.onrender.com/animals/add",
      newAnimal
    );
    // const newData = new FormData(e.target);
    // const mynewanimal = Object.fromEntries(newData);
    // setmynewanimal({
    //   name: e.target.name.value,
    //   image: e.target.image.value,
    //   description: e.target.description.value,
    // });

    // console.log(mynewanimal);
    // console.log("adding my animal");
    setmyanimals([...myanimals, newAnimal]);
  };
  console.log(" mount");

  useEffect(() => {
    const getAnimals = async () => {
      const res = await axios.get("https://zoo-api-nhvk.onrender.com/animals");
      res.status == 200 ? setmyanimals(res.data) : console.log("error");
      console.log(res.data);
    };
    getAnimals();
  }, []);
  return (
    <div>
      <Counter />
      <h1>The Zoo</h1>
      <p>Add Your Animal</p>
      <AnimalForm AddAnimal={AddAnimal} />
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className={classes.animalsWrapper}>
          {myanimals.map((animal, i) => (
            <AnimalCard key={i} {...animal} />
          ))}
        </div>
      )}
    </div>
  );
}
