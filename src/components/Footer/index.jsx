import { Container, Content, Icon } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> New Address is here
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Phone /> +1 345 15 98
        </Content.Item>
        <Content.Item>
          <Icon.Email /> webdevelopment@sample.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> India</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>

        <Content.Item>Web Development</Content.Item>
        <Content.Item>Web Development</Content.Item>
        <Content.Item>Web Development</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
