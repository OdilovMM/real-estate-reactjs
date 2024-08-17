import React from "react";
import Carousel from "../Carousel";
import { Container } from "./style";
import HouseCard from "../HouseCard";

export const Home = () => {

  const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      <Carousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
