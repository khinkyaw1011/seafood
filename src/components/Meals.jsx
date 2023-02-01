import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import NavBar from "./NavBar";
const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState("Beef");

  const getMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
    );
    //console.log(data);
    setMeals(data?.meals);
  };

  const getCategory = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    console.log(data);
    setCategory(data?.meals);
  };

  useEffect(() => {
    getMeal();
    getCategory();
  }, [type]);

  return (
    <>
      <div className="container mx-auto">
        <NavBar meals={meals} />

        <div className="flex justify-between m-5">
          <div>
            {category?.map((cat) => (
              <div className="">
                <button
                  onClick={() => setType(cat.strCategory)}
                  key={cat.strCategory}
                  className="btn btn-primary m-2 w-60"
                >
                  {cat.strCategory}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {meals
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val?.strMeal?.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((el) => (
                <Card key={el?.idMeal} el={el} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meals;
