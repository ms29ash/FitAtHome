import React from 'react'
import { Link } from "react-router-dom"
import '../Styles/Trial.css'
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

const Button = tw(Link)` text-center md:text-2xl  hover:bg-orangefood bg-redfood rounded-3xl px-24 py-4   text-white text-xl lg:text-2xl mt-5 mx-auto`

const Text = tw.p`lg:text-5xl md:text-4xl text-2xl text-center my-2 lg:my-5 font-bold `

const TextTop = tw(Text)`text-white`
const TextBottom = tw(Text)`text-orangefood`
