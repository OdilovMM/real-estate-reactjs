import React, { useEffect } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";

export const Properties = (props) => {
  const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      {arrayData.map((i, index) => (
        <HouseCard key={index} />
      ))}
    </Container>
  );
};

export default Properties;
