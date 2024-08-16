import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Section, Wrapper, Main } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>REsTate</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type="dark">
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Home;
