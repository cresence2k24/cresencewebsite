import React from "react";
import { Link } from "react-router-dom";
const Reg = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-gradient animate-gradient text-[36px] lg:text-[46px] font-bold leading-[1.5] mt-16 drop-shadow-3xl">
        Page
      </h1>
      <h1 className="text-gradient animate-gradient text-[36px] lg:text-[46px] font-bold leading-[1.5] mb-16 lg:my-5 drop-shadow-3xl">
        Not Found
      </h1>
      <p>
        Seems like you are lost? Go back to home{" "}
        <Link to={"/"} className="underline text-pink-600">
          here
        </Link>
      </p>
    </div>
  );
};

export default Reg;
