import React from 'react'
import { Link } from "react-router-dom"
import tw from "tailwind-styled-components";


function Trial() {
    return (
        <Container id="trial">
            <Wrapper >
                <TextTop >Start a healthy life</TextTop>
                <TextBottom  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas illum consequuntur voluptatibus tempore nesciunt eligendi, optio vitae vel ipsam laboriosam</TextBottom>
                <Button to="/trial" > Get a free trial</Button>
            </Wrapper>
        </Container>
    )
}

export default Trial

const Container = tw.div`grid place-items-center h-[500px] bg-blend-overlay`

const Wrapper = tw.div`flex flex-col items-center`

const Button = tw(Link)` text-center text-md font-bold hover:bg-orangefood bg-redfood rounded-full px-10 py-3   text-white  lg:text-xl mt-5 mx-auto uppercase`

const Text = tw.p`lg:text-5xl text-3xl text-center my-2 lg:my-5 font-bold `

const TextTop = tw(Text)`text-black`
const TextBottom = tw.p`text-slate-800 text-md text-center lg:w-[50%] md:w-[80%] w-full`
