import React from 'react'
import tw from 'tailwind-styled-components'
import { AiOutlinePlus } from 'react-icons/ai'

function AddPaymentMethod() {
    return (
        <Container>
            <Icon>
                <AiOutlinePlus />
            </Icon>
        </Container>
    )
}

export default AddPaymentMethod

const Container = tw.div`flex flex-col mr-4 items-center justify-center shadow-xl p-4 px-14 rounded bg-slate-100  text-black`
const Icon = tw.div` text-4xl `