import React from 'react'
import tw from 'tailwind-styled-components'
import AddPaymentMethod from './AddPaymentMethod'
import Payment from './Payment'
import PaymentMethod from './PaymentMethod'

function Payments() {
    return (
        <Container>
            <Heading>Saved Payment Methods</Heading>
            <Contain>
                <PaymentMethod />
                <PaymentMethod />
                <PaymentMethod />
                <AddPaymentMethod />

            </Contain>
            <Heading>Previous Payments</Heading>
            <Wrapper>
                <Payment />
                <Payment />
                <Payment />
                <Payment />
                <Payment />
                <Payment />
            </Wrapper>
        </Container>
    )
}

export default Payments
const Container = tw.div``
const Wrapper = tw.div`  `
const Contain = tw.div` flex  mb-10`
const Heading = tw.h1`mb-6`