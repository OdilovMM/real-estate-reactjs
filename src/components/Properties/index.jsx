import React, { useEffect } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <div className="info" style={{ textAlign: "center" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolorem
        aut quos obcaecati inventore, animi, sunt quam aliquam suscipit
        distinctio ratione accusamus culpa fuga itaque illum officia est fugiat
        dolore excepturi ipsum reprehenderit error doloribus? Commodi nulla
        saepe consequatur dolorem ipsam exercitationem, aliquid beatae velit sit
        repudiandae delectus libero odio eaque. Perspiciatis voluptatum porro
        architecto dicta iste nulla deserunt nam, illo necessitatibus, assumenda
        ratione molestiae rerum consequuntur! Non aperiam temporibus odio
        deleniti voluptas quaerat consequuntur ad, odit perferendis quas unde
        enim cumque harum optio. Fugit ducimus veniam deserunt nihil corporis a,
        odio soluta aliquid voluptas dicta, error nesciunt minus sapiente sit,
        exercitationem possimus perferendis. Perferendis, sequi autem reiciendis
        natus sunt at numquam, et praesentium veniam illum explicabo accusantium
        consectetur saepe quia aliquam repellendus expedita unde deserunt,
        ratione consequuntur. Magnam debitis, in possimus consequuntur culpa
        amet, accusamus eaque dignissimos placeat pariatur optio unde tempora
        consequatur quis corrupti. Qui, voluptatum iste. Quidem.
      </div>
      <Container>
        {data?.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Properties;
