import React from "react";
import { Link } from "react-router-dom";
const Reg = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-gradient animate-gradient text-[36px] lg:text-[46px] font-bold leading-[1.5] mt-16 drop-shadow-3xl">
        {props.Title[0]}
      </h1>
      <h1 className="text-gradient animate-gradient text-[36px] lg:text-[46px] font-bold leading-[1.5] mb-16 lg:my-5 drop-shadow-3xl">
        {props.Title[1]}
      </h1>
      <p>
        {props.text}{" "}
        <Link to={"/"} className="underline text-pink-600">
          here
        </Link>
      </p>
    </div>
  );
};

export default Reg;
