import React from 'react'
import tw from 'tailwind-styled-components'
import { AiFillCheckCircle, AiOutlineDown } from 'react-icons/ai'

function Payment() {
    return (
        <Container>
            <Top>
                <Wrapper>

                    <Icon>
                        <AiFillCheckCircle />
                    </Icon>
                    <Head>Paid &#8377;105</Head>
                </Wrapper>
                <Address>Feb 5, 2023 06:30 am</Address>
            </Top>
            <Bottom>
                <AiOutlineDown />
            </Bottom>

        </Container>
    )
}

export default Payment

const Container = tw.div`flex items-center justify-between shadow-xl rounded bg-white w-full p-4 mb-3 cursor-pointer shadow-xl `
const Top = tw.div` `
const Wrapper = tw.div`flex items-center`
const Icon = tw.div`text-green-700 text-md mr-2`
const Head = tw.h1`text-lg`
const Address = tw.p`text-sm`
const Bottom = tw.div`flex justify-between`