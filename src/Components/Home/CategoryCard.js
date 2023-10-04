import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { setType } from "../../features/filter/foodFilterSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillRightCircle } from "react-icons/ai"
import { ClassNames } from "@emotion/react";

function CategoryCard(props) {
  const dispatch = useDispatch();
  const { title, image, icon } = props;

  return (
    <>
      <Wrapper>
        {
          <Link
            to="/findfood"
            onClick={() => {
              dispatch(setType(title));
            }}>
            <Img
              placeholder={<LoadImg />}
              threshold={100}
              src={`images/category/${image}`}
              // src={image}
              alt=""
            />
            <Detail>
              <Text>

                <Image
                  placeholder={<LoadImg />}
                  threshold={100}
                  src={`images/category/${icon}`}
                  // src={image}
                  alt=""
                />
                <Head >{title}</Head>
              </Text>
              <  AiFillRightCircle className=" text-2xl text-ssorange" />
            </Detail>
          </Link>
        }
      </Wrapper>
    </>
  );
}

export default CategoryCard;

const Wrapper = tw.div`card-container transition-all   mt-4 lg:mt-10 xl:mt-12  bg-white duration-300 shadow-lg border-[1px] rounded-md  aspect-[5/4] relative object-cover before:bg-gradient-to-t before:from-black  before:via-black/10 before:to-black/0 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0   `;

const Img = tw(LazyLoadImage)`object-fill rounded-md h-full w-full `;
const LoadImg = tw.div`object-cover rounded-t-md w-full h-[10rem] bg-gray-400`;
const Detail = tw.div`px-4 py-2 rounded-md absolute flex items-center bg-white bottom-4 right-2 left-2 justify-between  `;
const Text = tw.div` flex items-center `;
const Head = tw.h3`text-center font-bold  text-base ml-2 `;
const Image = tw.img` w-6 `