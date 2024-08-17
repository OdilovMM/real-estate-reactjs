import React from "react";
import Carousel from "../Carousel";
import { Container } from "./style";
import HouseCard from "../HouseCard";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
