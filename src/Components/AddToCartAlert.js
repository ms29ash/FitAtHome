import React from 'react'
import tw from 'tailwind-styled-components'

function AddToCartAlert({ alert }) {
    return (
        <Container alert={alert}>{alert}</Container>
    )
}

export default AddToCartAlert

const Container = tw.div`fixed md:absolute right-0 left-0   bg-redfood  text-white font-bold grid place-items-center text-xl transition-all ${p => p.alert ? 'h-10  top-0 ' : '-top-8'} `