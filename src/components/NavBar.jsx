import React from "react";
import { useState } from "react";
import Card from "./Card";

const NavBar = ({meals}) => {
  const [search, setSearch] = useState("");
  // {meals
  //   ?.filter((val) => {
  //     if (search === "") {
  //       return val;
  //     } else if (
  //       val?.strMeal?.toLowerCase().includes(search.toLowerCase())
  //     ) {
  //       return val;
  //     }
  //   })
  //   .map((el) => (
  //     <Card key={el?.idMeal} el={el} />
  //   ))}
  

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Meals for You</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
               onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
