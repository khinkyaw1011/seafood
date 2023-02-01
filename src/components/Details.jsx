import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});

  const singleMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data?.meals);

    console.log(data?.meals[0]);
    setMeals(data.meals[0]);
  };
  useEffect(() => {
    singleMeal();
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={meals.strMealThumb}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{meals.strMeal}</h1>
            <p className="py-6">{meals.strInstructions}</p>
            <a
              href={meals.strYoutube}
              target="_blank"
              className="btn bg-red-700"
            >
              YouTube
            </a>
            <Link to={"/"}>
            
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
