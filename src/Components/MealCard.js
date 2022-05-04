import React from 'react'
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";


function MealCard(props) {
    const { title, description, image } = props

    return (
        <>


            <Wrapper>
                <Link to="/food">
                    <Img src={`images/${image}`} alt="" />
                    <Text>
                        <Head className="">{title}
                        </Head>
                        <Desc >{description}</Desc>
                    </Text>
                </Link>
            </Wrapper>

        </>
    )
}

export default MealCard

const Wrapper = tw.div`card-container   mt-4 lg:mt-10 xl:mt-12   bg-white border-black-100 shadow-lg border-[1px] hover:shadow-2xl rounded-md`

const Img = tw.img`object-cover rounded-t-md w-full h-[10rem]`
const Text = tw.div`p-4`
const Head = tw.h1`text-2xl font-bold meal-heading`
const Desc = tw.p``
