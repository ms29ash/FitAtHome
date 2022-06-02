import React from 'react'
import { Link } from "react-router-dom"
import tw from "tailwind-styled-components";


function Trial() {
    return (
        <Container id="trial">
            <Wrapper >
                <TextTop className="">Get a Trial</TextTop>
                <TextBottom >Make Your Life Easy</TextBottom>
                <Button to="/trial" > Get a free trial</Button>
            </Wrapper>
        </Container>
    )
}

export default Trial

const Container = tw.div`grid place-items-center  md:h-[80vh] h-[50vh] bg-blend-overlay`

const Wrapper = tw.div`flex flex-col`

const Button = tw(Link)` text-center md:text-2xl  hover:bg-orangefood bg-redfood rounded-3xl px-24 lg:py-3 py-2  text-white text-xl lg:text-2xl mt-5 mx-auto`

const Text = tw.p`lg:text-5xl text-3xl text-center my-2 lg:my-5 font-bold `

const TextTop = tw(Text)`text-white`
const TextBottom = tw(Text)`text-orangefood`
