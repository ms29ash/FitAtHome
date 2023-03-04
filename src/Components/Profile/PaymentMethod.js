import React from 'react'
import tw from 'tailwind-styled-components'
import { AiFillCheckCircle, AiFillCreditCard } from 'react-icons/ai'

function PaymentMethod() {
    return (
        <Container>
            <Icon>
                <AiFillCreditCard />
            </Icon>
            <Head>Rupay Card</Head>

            <Balance>&#8377;5000</Balance>
        </Container>
    )
}

export default PaymentMethod

const Container = tw.div`flex flex-col mr-6 items-center justify-center shadow-xl p-8 rounded bg-slate-100  text-black`
const Icon = tw.div` text-3xl mr-2`
const Head = tw.p`text-sm font-bold my-1`
const Balance = tw.p`text-xs`