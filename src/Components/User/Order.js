import React from 'react'
import tw from 'tailwind-styled-components'

function Order() {
    return (
        <Container>
            <Top>
                <Img src="https://images.unsplash.com/photo-1604908550665-327363165423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
                <Details>
                    <Head>The Red Box</Head>
                    <Address>JP Nagar ,UK</Address>

                    <DetailsBtn>VIEW DETAILS</DetailsBtn>
                </Details>
            </Top>
            <hr className="my-3" />
            <Bottom>
                <Wrapper>
                    <Items>Lorem ipsum, dolor sit amet consectetur</Items>
                    <Buttons>

                        <TrackBtn>TRACK</TrackBtn>
                        <HelpBtn>HELP</HelpBtn>
                    </Buttons>
                </Wrapper>

                <p>Total Paid : 257</p>
            </Bottom>

        </Container>
    )
}

export default Order

const Container = tw.div`shadow-xl rounded bg-white w-full p-4 mb-6`
const Top = tw.div`flex `
const Img = tw.img`w-32 h-20`
const Details = tw.div`ml-4`
const Head = tw.h1`text-lg`
const Address = tw.p`text-sm`
const DetailsBtn = tw.button`text-redfood text-sm font-bold mt-3`


const Bottom = tw.div`flex justify-between`
const Wrapper = tw.div``
const Items = tw.p`text-sm`
const Buttons = tw.div`flex items-center mt-4`
const TrackBtn = tw.button`bg-redfood font-bold text-white text-sm py-2 px-8 rounded-full shadow-lg mr-2 hover:bg-orangefood`
const HelpBtn = tw(TrackBtn)`text-black hover:bg-slate-100  bg-slate-100 hover:shadow-xl`