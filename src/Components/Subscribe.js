import React from 'react'
import { Link } from "react-router-dom";
import subscribeImg from '../images/subscribe.jpg'
import tw from "tailwind-styled-components";

function Subscribe() {
    return (
        <>

            <Section id="subscribe">

                <Container className="card-container ">
                    <Head >Subscribe to Get Best Food</Head>
                    <Wrapper >
                        <Img src={subscribeImg} alt="....." />
                        <Details  >
                            <Heading> Food</Heading>
                            <Text  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis saepe laborum iste veniam facilis error vitae distinctio inventore sapiente et Expedita.
                            </Text>
                            <Button to="/subscribe" >Subscribe Now</Button>
                        </Details>
                    </Wrapper>
                </Container>
            </Section>
        </>
    )



}


export default Subscribe

const Section = tw.div`xl:px-[20vw] pt-12 flex  justify-center  align-center items-center -m-5 subscribe bg-transparent pb-10`

const Container = tw.div`   bg-white justify-center shadow-xl px-12 md:px-16 flex flex-col `

const Head = tw.h1`text-black headings text-center `
const Wrapper = tw.div`flex  items-center flex-col lg:flex-row xl:pb-8`

const Img = tw.img`w-[40%] h-[80%] object-cover`
const Details = tw.div`text flex flex-col bg-white p-4 justify-center items-center lg:items-start`

const Heading = tw.h1`text-2xl text-center xl:text-left font-bold my-3`

const Text = tw.p`mb-3 text-center xl:text-left`
const Button = tw(Link)`lg:w-full w-2/5 text-center hover:bg-orangefood bg-redfood text-white font-bold xl:mx-0 text-sm  px-2 py-3 rounded-full mt-3 mb-3`



