import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

function NavLogo() {
  return (
    <Wrapper className="header">
      <Link to="/">
        <picture className="w-full">
          <source media="(max-width:768px)" srcSet="/images/logo.png" />
          <source media="(min-width:768px)" srcSet="/logo.png" />
          <Img src="img_orange_flowers.jpg" alt="/images/logo.png" />
        </picture>
      </Link>
    </Wrapper>
  );
}

export default NavLogo;

const Wrapper = tw.div`lg:inline-block w-fit flex items-center `;
const Img = tw.img`max-w-[50px] md:max-w-[120px] lg:max-w-[180px]  `;
