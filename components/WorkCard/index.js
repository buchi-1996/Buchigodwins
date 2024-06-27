import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden transition-all ease-out duration-300 h-48 mob:h-[300px]"
        
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300 aspect-square mob:aspect-video"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-2xl font-bold">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-sm opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
