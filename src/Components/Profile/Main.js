import React from 'react'
import tw from 'tailwind-styled-components'
import Addresses from './Addresses'
import Orders from './Orders'
function Main() {
    return (
        <Container>
            {/* <Orders /> */}
            <Addresses />
        </Container>
    )
}

export default Main

const Container = tw.div`flex-1 w-full p-4 `