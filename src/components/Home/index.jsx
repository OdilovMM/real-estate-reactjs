import React from "react";
import Carousel from "../Carousel";
import Recommended from "../Recommended";
import Category from "../Category";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";
import { Container } from "./style";
import Footer from "../Footer";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
      <Footer />
    </Container>
  );
};

export default Home;
