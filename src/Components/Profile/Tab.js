import React from 'react'
import tw from 'tailwind-styled-components'
import Addresses from './Addresses'
import Favorites from './Favorites'
import Orders from './Orders'
import Payments from './Payments'
function Tab({ tab }) {
    return (
        <Container>
            {
                tab === 'address' ? <Addresses /> :
                    tab === 'payments' ? <Payments /> :
                        tab === 'favorites' ? <Favorites /> :
                            <Orders />
            }
        </Container>
    )
}

export default Tab

const Container = tw.div`flex-1 w-full p-4 max-h-[80vh] overflow-y-scroll`