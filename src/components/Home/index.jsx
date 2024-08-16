import React from "react";
import { Container } from "./style";
import { Input, Button } from "../Generic";

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={200} placeholder={"test"} />
    </Container>
  );
};

export default Home;
