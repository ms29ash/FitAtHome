import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

function MealCard(props) {
  const { title, description, image } = props;

  return (
    <>
      <Wrapper>
        {image ? (
          <Link to="/food">
            <Img src={`images/${image}`} alt="" />
            <Text>
              <Head className="">{title}</Head>
              <Desc>{description}</Desc>
            </Text>
          </Link>
        ) : (
          <>
            <LoadImg></LoadImg>
            <Text>
              <Head className="">{title}</Head>
              <Desc>{description}</Desc>
            </Text>
          </>
        )}
      </Wrapper>
    </>
  );
}

export default MealCard;

const Wrapper = tw.div`card-container   mt-4 lg:mt-10 xl:mt-12   bg-white border-black-100 shadow-lg border-[1px] hover:shadow-2xl rounded-md w-[90%]`;

const Img = tw.img`object-cover rounded-t-md w-full h-[10rem]`;
const LoadImg = tw.div`object-cover rounded-t-md w-full h-[10rem] bg-gray-400`;
const Text = tw.div`p-4`;
const Head = tw.h1`text-2xl font-bold meal-heading`;
const Desc = tw.p``;
