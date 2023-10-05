import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { setType } from "../features/filter/foodFilterSlice";
import { BsYoutube, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

function Footer() {
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Wrapper className="col-span-2	md:col-span-1 ml-0" >
          <LinkTo to="/">
            <Img src='/images/Logo.png' alt="" />
          </LinkTo>
        </Wrapper>
        <Wrapper>
          <Head>Company</Head>
          <LinkTo to="/" >
            Who we are
          </LinkTo>
          <LinkTo to="/" >
            Blog
          </LinkTo>

          <LinkTo to="/" >
            Work With Us
          </LinkTo>
        </Wrapper>
        <Wrapper>
          <Head>Categories</Head>
          <LinkTo
            onClick={() => {
              dispatch(setType("Veg"));
            }}
            to="/food">
            Veg
          </LinkTo>
          <LinkTo
            onClick={() => {
              dispatch(setType("Non-Veg"));
            }}
            to="/food">
            Non-Veg
          </LinkTo>
          <LinkTo
            onClick={() => {
              dispatch(setType("Vegan"));
            }}
            to="/food">
            Vegan
          </LinkTo>
        </Wrapper>
        <Wrapper>
          <Head>Service</Head>
          <LinkTo to="/subscribe">Subscribe</LinkTo>
          <LinkTo to="/food">Buy Now</LinkTo>
          <LinkTo to="/trial">Free Trial</LinkTo>
        </Wrapper>
        <Wrapper>
          <Head>Learn More</Head>
          <LinkTo to="/">Privacy</LinkTo>
          <LinkTo to="/">Security</LinkTo>
          <LinkTo to="/">Terms</LinkTo>
          <LinkTo to="/">Contact us</LinkTo>
        </Wrapper>

      </Container>
      <Social>
        <Head>Follow Us On</Head>
        <Icons>

          <a href="/"><BsFacebook /></a>
          <a href="/"><BsTwitter /></a>
          <a href="/"><BsInstagram /></a>
          <a href="/"><BsYoutube /></a>
        </Icons>
      </Social>
    </>
  );
}

export default Footer;

const Container = tw.footer`md:pt-12 pt-2 pb-6 bg-black grid  md:grid-cols-5    items-start  text-white grid-cols-2`;
const Wrapper = tw.div`flex flex-col mt-6 md:mt-4 ml-[20%]`
const Head = tw.h3`text-lg mb-3`
const Img = tw.img`w-[30%] md:w-[50%] mx-auto`
const LinkTo = tw(Link)`text-gray-300 hover:text-white my-2 text-sm  `;
const Social = tw.div` flex w-screen justify-center flex-col items-center py-6 text-white bg-black`
const Icons = tw.div`flex text-3xl space-x-7 mt-2 `