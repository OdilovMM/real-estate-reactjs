import React, { useContext } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { PropertiesContext } from "../../context/properties";

export const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);

  const data = [];

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data?.data?.length ? (
          data?.data.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <h1>No Data Found. There is no any API connection on the behind the scene. please find relevant backend API</h1>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Favourite;
