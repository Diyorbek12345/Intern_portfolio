import React from "react";

export const Hero = () => {
  return (
    <div className="containere">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
              My name is
              <br className="hidden lg:inline-block" />
              Abdullayev Diyorbek
            </h1>
            <p className="mb-8 leading-relaxed">
              Hi 👋, I am intern Front-end Developer. I am 15 years old and i
              study at school in 8th grade in 35 school which located in
              Bukhara. And I want to work with senior Developer in training time
              as well as I demand 100$ at that time.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKZTmJbuTB_gR2ntWyIiDhvwo4qGPhmnLiEh-Z5x6OuIgU3RXCE9lcXatmPYtrbPsUPE&usqp=CAU"
              width={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
