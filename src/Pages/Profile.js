import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Main from '../Components/Profile/Main'
import ProfileDetail from '../Components/Profile/ProfileDetail'
import Sidebar from '../Components/Profile/Sidebar'

function Profile() {
    return (
        <Container>
            <ContainerIn>

                <ProfileDetail />
                <Wrapper>
                    <Sidebar />
                    <Main />
                </Wrapper>
            </ContainerIn>
        </Container>
    )
}

export default Profile

const Container = tw.div` max-w-screen  min-h-[80vh] h-fit px-[5%]  bg-white mb-[5vh]`
const ContainerIn = tw.div`w-full h-full flex flex-col justify-center items-center `
const Wrapper = tw.div`
flex  w-full  bg-white
`