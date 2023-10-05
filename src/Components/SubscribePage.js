import React from 'react'
import tw from "tailwind-styled-components";
import SubscribeCard from './SubscribeCard';

function SubscribePage() {
    return (
        <Container>
            <Wrapper>
                <Head>Our Subscriptions</Head>

                <SubscribeCard title="Basic" img="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" price='499' months="3" />
                <SubscribeCard title="Fitness" img="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" price='999' months="6" popular={true} />
                <SubscribeCard title="Gym" img="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" price='1999' months="12" />
            </Wrapper>

        </Container>
    )
}

export default SubscribePage

const Container = tw.div` h-fit w-screeen grid place-items-center  mb-[5vh] `
const Wrapper = tw.div`grid md:w-[80vw] w-[90vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center		gap-[1vw]	 md:flex-row justify-items-center	 `
const Head = tw.h1`col-span-1 md:col-span-2 lg:col-span-3 mb-6 mt-10 text-3xl`