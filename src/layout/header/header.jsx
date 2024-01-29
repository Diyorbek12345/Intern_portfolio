import React from "react";

export const Header = () => {
  return (
    <header className="text-gray-400 bg-gradient-to-r from-violet-500 to-fuchsia-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="title uppercase text-white text-2xl">Intern Portfolio</h1>
      </div>
    </header>
  );
};
