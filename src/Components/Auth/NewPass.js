import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Wrapper, Head } from "./Form";

export default function NewPass() {
  const navigate = useNavigate();

  return (
    <Container className="signin-page ">
      <Wrapper>
        <Head>Password has been updated</Head>
        <Button onClick={() => navigate("/signin")}>Sign In</Button>
      </Wrapper>
    </Container>
  );
}
