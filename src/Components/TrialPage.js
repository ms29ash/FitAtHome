import React from 'react'
import tw from 'tailwind-styled-components'

function TrialPage() {
    return (
        <Container>
            <Wrapper>
                <Img src='./images/trailpageimg.jpg' />
                <Card>
                    <TopHead>Free Trial</TopHead>
                    <Head>What you Get</Head>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt rerum sint debitis hic nisi assumenda autem officiis! Tempore aspernatur vel esse praesentium sequi enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio consequatur beatae impedit eius asperiores voluptate natus eaque aperiam. Et dolorum vel illum suscipit quo qui, dolores optio ut earum numquam, inventore, non voluptatum impedit. Similique laboriosam inventore sint nostrum, maiores asperiores ducimus quam a.</p>
                    <Button>Start Trial</Button>
                    <SmallText>free for one month</SmallText>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default TrialPage
const Container = tw.div` h-screen w-screen grid place-items-center	`
const Wrapper = tw.div`flex items-center mx-auto w-[70vw] h-[60vh] bg-white shadow-xl overflow-hidden`
const Img = tw.img` w-[50%] h-full  object-cover`
const Card = tw.div`p-20`
const TopHead = tw.h1`text-4xl my-5 `
const Head = tw.h3`text-2xl `
const Button = tw.button` bg-orangefood text-white px-8 py-2 rounded-lg mt-6 hover:bg-orangefood`
const SmallText = tw.p` block  ml-1`
