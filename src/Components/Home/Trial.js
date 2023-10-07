import React from 'react'
import { Link } from "react-router-dom"
import tw from "tailwind-styled-components";


function Trial() {
    return (
        <Container id="trial">
            <Wrapper >
                <TextTop >Start a healthy life</TextTop>
                <TextBottom  >Embark on a transformative journey towards a healthier, more vibrant you with Sweet and Savor. Our commitment to your well-being drives us to curate a diverse range of nutritious and delightful meals, making the path to a balanced and fulfilling life easier and enjoyable. Whether you're striving for fitness milestones or seeking the goodness of fresh, wholesome ingredients, we invite you to savor every bite and embrace the joy of a nourished, active lifestyle. Start your healthy journey today, because your well-being matters.</TextBottom>
                <Button to="/trial" > <p className="z-1 relative" >Get a free trial</p> </Button>
            </Wrapper>
        </Container>
    )
}

export default Trial

const Container = tw.div`grid place-items-center py-20 bg-blend-overlay`

const Wrapper = tw.div`flex flex-col items-center`

const Button = tw(Link)` text-center text-md font-bold  bg-ssorange before:bg-ssgreen  hover-btn px-20 py-3   text-white  lg:text-xl mt-5 mx-auto uppercase`

const Text = tw.p`lg:text-5xl text-3xl text-center my-2 lg:my-5 font-bold `

const TextTop = tw(Text)`text-black text-4xl mb-6 `
const TextBottom = tw.p`text-slate-800 text-md  text-bold text-center max-w-[1000px] px-[10%] w-full`
