import React from "react";
import tw from "tailwind-styled-components";
import Tab from "../Components/User/Tab";
import ProfileDetail from "../Components/User/ProfileDetail";
import Sidebar from "../Components/User/Sidebar";
import { useSearchParams } from "react-router-dom";

function User() {
  let [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "order";
  return (
    <Container>
      <ContainerIn>
        <ProfileDetail />
        <Wrapper>
          <Sidebar tab={tab} />
          <Tab tab={tab} />
        </Wrapper>
      </ContainerIn>
    </Container>
  );
}

export default User;

const Container = tw.div` max-w-screen  min-h-[80vh] h-fit px-[5%]  bg-white mb-[5vh]`;
const ContainerIn = tw.div`w-full h-full flex flex-col justify-center items-center `;
const Wrapper = tw.div`
flex  w-full  bg-white
`;
