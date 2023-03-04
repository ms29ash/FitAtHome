import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoryLoading() {


    return (
        <>
            <Wrapper>
                <Img>

                </Img>
                <Text>

                </Text>
            </Wrapper>
        </>
    );
}

export default CategoryLoading;

const Wrapper = tw.div`card-container transition-all   mt-4 lg:mt-10 xl:mt-12 sm:mx-[1w] mx-[2vw]  bg-white duration-300 shadow-lg border-[1px] sm:w-[23vw] w-[46vw] rounded max-w-[250px] `;
const Img = tw.div`object-contain rounded-t-md w-full aspect-[5/2.75]`;
const Text = tw.div`p-4`;
