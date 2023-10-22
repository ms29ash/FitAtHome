import React from "react";
import tw from "tailwind-styled-components";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

function TestimonialCard({ review, next, previous }) {
  return (
    <Container>
      <Card>
        <Wrapper>
          <Head>{review?.name}</Head>
          <p className="leading-5 text-[0.9rem] text-gray-800 ">
            {review?.content}
          </p>
          <Buttons>
            <LeftBtn onClick={previous}>
              <BsArrowLeftShort />
            </LeftBtn>
            <RightBtn onClick={next}>
              <BsArrowRightShort />
            </RightBtn>
          </Buttons>
        </Wrapper>
        <Box>
          <Img src={review?.image} alt="" />
        </Box>
      </Card>
    </Container>
  );
}

export default TestimonialCard;

const Container = tw.div` basis-[100vw] scroll-end scroll-mx-5 shrink-0 p-8 grid place-items-center snap-always snap-center

`;

const Card = tw.div` h-full shadow-2xl w-full lg:w-[70%]  items-center bg-white  rounded-lg
flex md:flex-row flex-col-reverse  `;
const Head = tw.h1`my-3`;
const Wrapper = tw.div`ml-[5%] w-full p-[5%] lg:px-[2.5%]  lg:w-[50%] mr-[3%] `;
const Box = tw.div` w-full lg:w-[42%] `;
const Img = tw.img` aspect-[4/3] object-cover rounded bottom-6 left-6 md:relative shadow-xl  `;
const Buttons = tw.div`mt-4`;
const LeftBtn = tw.button`bg-ssorange hover:bg-ssgreen  text-white text-xl mr-2 p-2 rounded-full shadow-xl`;
const RightBtn = tw(LeftBtn)` bg-slate-200 hover:bg-slate-400 text-black`;
