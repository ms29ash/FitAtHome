import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import tw from "tailwind-styled-components";

function ProductSideBar() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const type = searchParams.get("category") || "vegetable";

  return (
    <div className="  min-w-[300px] mt-2 md:mt-0 lg:h-full overflow-y-hidden shadow-xl lg:shadow-none ">
      <div className="top-0 lg:fixed bottom-0 flex items-center ">
        <div className=" top-[15%] min-w-[300px] lg:max-h-[80vh] overflow-y-hidden">
          <h1 className=" pt-6 pb-4 hidden lg:block">Categories</h1>
          <div className=" bg-white rounded-lg  lg:h-[80vh] overflow-y-auto lg:pb-[30%] flex lg:flex-col hideScroll pb-2 ">
            <Wrapper
              selected={type === "vegetable"}
              onClick={() => {
                navigate("/product?category=vegetable");
              }}
            >
              <Img src="/images/products/icons/Vegetable.jpg" alt="" />
              <Head>Fresh Vegetables</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Fruit"}
              onClick={() => {
                navigate("/product?category=Fruit");
              }}
            >
              <Img src="/images/products/icons/fruit.jpg" alt="" />
              <Head>Fresh Fruits</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Juice"}
              onClick={() => {
                navigate("/product?category=Juice");
              }}
            >
              <Img src="/images/products/icons/juice.jpg" alt="" />
              <Head>Fresh Juice</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Dairy"}
              onClick={() => {
                navigate("/product?category=Dairy");
              }}
            >
              <Img src="/images/products/icons/dairy.jpg" alt="" />
              <Head>Dairy</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Frozen"}
              onClick={() => {
                navigate("/product?category=Frozen");
              }}
            >
              <Img src="/images/products/icons/frozen.jpg" alt="" />
              <Head>Frozen Veg</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Sliced"}
              onClick={() => {
                navigate("/product?category=Sliced");
              }}
            >
              <Img src="/images/products/icons/sliced.jpg" alt="" />
              <Head>Sliced Fruit</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Herbs"}
              onClick={() => {
                navigate("/product?category=Herbs");
              }}
            >
              <Img src="/images/products/icons/herbs.jpg" alt="" />
              <Head>Herbs & Leafies</Head>
            </Wrapper>
            <Wrapper
              selected={type === "Exotic"}
              onClick={() => {
                navigate("/product?category=Exotic");
              }}
            >
              <Img src="/images/products/icons/exotic.jpg" alt="" />
              <Head>Exotics</Head>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSideBar;

const Wrapper = tw.div` flex items-center border-b-[1px] border-l-[1px] hover:bg-ssgreen/20 cursor-pointer hover:border-l-[0.5rem] lg:hover:border-l-ssgreen transition-all duration-200 min-w-[200px]  ${(
  p
) =>
  p.selected && "lg:border-l-[0.5rem] lg:border-l-ssgreen bg-ssgreen/20  "}  `;
const Img = tw.img`rounded-2xl w-[4.5rem] p-2 aspect-square object-cover `;
const Head = tw.p`lg:whitespace-nowrap  font-medium text-[0.9rem] select-none`;
