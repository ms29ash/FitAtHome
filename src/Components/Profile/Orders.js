import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Order from './Order'

function Orders() {
    return (
        <Container>
            <Heading>Active Orders</Heading>
            <Wrapper>
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
            </Wrapper>
        </Container>
    )
}

export default Orders

const Container = tw.div``
const Wrapper = tw.div`  `
const Heading = tw.h1`mb-6`