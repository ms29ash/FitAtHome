import React from "react";
import footLgo from "../images/logoFoooter.png";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { setType } from "../features/filter/foodFilterSlice";

function Footer() {
  const dispatch = useDispatch();
  return (
    <Container>
      <div>
        <Links to="/">
          <img src={footLgo} alt="" />
        </Links>
      </div>
      <div>
        <ul>
          <Li>
            <Links
              onClick={() => {
                dispatch(setType("Veg"));
              }}
              to="/food">
              Veg
            </Links>
          </Li>
          <Li>
            <Links
              onClick={() => {
                dispatch(setType("Non-Veg"));
              }}
              to="/food">
              Non-Veg
            </Links>
          </Li>
          <Li>
            <Links
              onClick={() => {
                dispatch(setType("Vegan"));
              }}
              to="/food">
              Vegan
            </Links>
          </Li>
        </ul>
      </div>
      <div>
        <ul>
          <Li>
            <Links to="/subscribe">Subscribe</Links>
          </Li>
          <Li>
            <Links to="/food">Buy Now</Links>
          </Li>
          <Li>
            <Links to="/trial">Free Trial</Links>
          </Li>
        </ul>
      </div>
      <div>
        <ul>
          <Li>
            <Links to="/">Facebook</Links>
          </Li>
          <Li>
            <Links to="/">Twitter</Links>
          </Li>
          <Li>
            <Links to="/">Instagram</Links>
          </Li>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;

const Container = tw.footer`py-16 bg-greenfood grid md:grid-cols-4 grid-cols-1  justify-items-center items-center  text-white text-center`;

const Li = tw.li`py-3`;

const Links = tw(Link)` my-3  hover:underline`;
