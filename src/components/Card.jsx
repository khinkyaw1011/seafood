import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({el}) => {
  return (
    <>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src={el?.strMealThumb} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{el?.strMeal}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     <Link to={`/${el?.idMeal}`}>
     <button className="btn btn-primary">Details</button>
     </Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
