import React from "react";
import { Header } from "../../layout/header";
import { Hero } from "../../components/hero";
import Cart from "../../components/carts/carts";
import { Footer } from "../../layout/footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cart />
      <Footer />
    </div>
  );
};
