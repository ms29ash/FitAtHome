import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { setType } from "../../features/filter/foodFilterSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoryCard(props) {
  const dispatch = useDispatch();
  const { title, image } = props;

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
              // src={`images/${image}`}
              src={image}
              alt=""
            />
            <Text>
              <Head className="flex-col">{title}</Head>
            </Text>
          </Link>
        }
      </Wrapper>
    </>
  );
}

export default CategoryCard;

const Wrapper = tw.div`card-container transition-all   mt-4 lg:mt-10 xl:mt-12  bg-white duration-300 shadow-lg border-[1px] hover:shadow-2xl rounded sm:w-[23%] max-w-[250px] hover:transform:scale(1.05) w-[48%] mx-[1%]`;

const Img = tw(LazyLoadImage)`object-contain rounded-t-md w-full aspect-[5/2.75]`;
const LoadImg = tw.div`object-cover rounded-t-md w-full h-[10rem] bg-gray-400`;
const Text = tw.div`p-4`;
const Head = tw.h1`text-center font-bold text-[100%] meal-heading`;
