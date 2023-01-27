import React from 'react'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-styled-components'
import { logoutUser } from '../../features/auth/authSlice'


function Sidebar() {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <Container>
            <Wrapper>
                <Opt>Order</Opt>
                <Opt>Favorites</Opt>
                <Opt>Payments</Opt>
                <Opt>Subscriptions</Opt>
                <Opt>Addresses</Opt>
            </Wrapper>
            <Opt onClick={logout} className="ml-4 mb-6" >Logout</Opt>
        </Container>

    )
}

export default Sidebar

const Container = tw.div`
h-[100%] bg-slate-100 flex flex-col justify-between
    
`

const Wrapper = tw.div`pt-6 pl-4 `
const Opt = tw.div` font-semibold  text-black py-8 pl-4 pr-16 py-4 hover:bg-redfood hover:text-white  hover:cursor-pointer  `
