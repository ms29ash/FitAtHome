import React from 'react'
import tw from 'tailwind-styled-components'
import Addresses from './Addresses'
import Orders from './Orders'
function Tab({ tab }) {
    return (
        <Container>
            {tab === 'order' && <Orders />}
            {tab === 'address' && <Addresses />}
        </Container>
    )
}

export default Tab

const Container = tw.div`flex-1 w-full p-4 `