import React from 'react'
import { useSelector } from 'react-redux'
import tw from 'tailwind-styled-components'
import Tab from '../Components/Profile/Tab'
import ProfileDetail from '../Components/Profile/ProfileDetail'
import Sidebar from '../Components/Profile/Sidebar'
import { useLocation, useSearchParams } from 'react-router-dom';


function Menu() {
    let [searchParams] = useSearchParams()
    const tab = searchParams.get('tab') || 'order';
    return (
        <Container>
            <ContainerIn>

                <ProfileDetail />
                <Wrapper>
                    <Sidebar tab={tab} />
                    <Tab tab={tab} />
                </Wrapper>
            </ContainerIn>
        </Container>
    )
}

export default Menu

const Container = tw.div` max-w-screen  min-h-[80vh] h-fit px-[5%]  bg-white mb-[5vh]`
const ContainerIn = tw.div`w-full h-full flex flex-col justify-center items-center `
const Wrapper = tw.div`
flex  w-full  bg-white
`
