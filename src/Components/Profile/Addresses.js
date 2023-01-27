import React from 'react'
import tw from 'tailwind-styled-components'
import Address from './Address'
import { AiOutlinePlus } from 'react-icons/ai'

function Addresses() {
    return (
        <Container>
            <Heading>Addresses</Heading>
            <Wrapper>
                <Address />
                <Address />
                <Address />

            </Wrapper>
            <Btn> <AiOutlinePlus /> Add New Address</Btn>
        </Container>

    )
}

export default Addresses


const Container = tw.div``
const Wrapper = tw.div`  `
const Heading = tw.h1`mb-6`
const Btn = tw.button`text-redfood flex items-center font-bold hover:text-orangefood`