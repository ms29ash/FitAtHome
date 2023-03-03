import React from 'react'
import tw from "tailwind-styled-components";
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'


function TestimonialCard({ review, change }) {
    return (
        <Container>

            <Card>
                <Wrapper>
                    <Head>{review?.name}</Head>
                    <p className='leading-5 text-xs'>{review?.review}</p>
                    <Buttons>
                        <LeftBtn onClick={() => change(0)} >
                            <BsArrowLeftShort />
                        </LeftBtn>
                        <RightBtn onClick={() => change(1)} >
                            <BsArrowRightShort />
                        </RightBtn>
                    </Buttons>
                </Wrapper>
                <Box>
                    <Img src="https://images.pexels.com/photos/793772/pexels-photo-793772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </Box>

            </Card>
        </Container>
    )
}

export default TestimonialCard

const Container = tw.div` basis-[100vw] scroll-end scroll-mx-5 shrink-0 p-8 grid place-items-center snap-always snap-center`

const Card = tw.div` h-full shadow-xl  w-[70%]  items-center bg-white flex `
const Head = tw.h1`my-3`
const Wrapper = tw.div`ml-[5%] w-[50%] mr-[3%] `;
const Box = tw.div` w-[42%] `
const Img = tw.img` aspect-[4/3] object-cover rounded bottom-6 left-6 relative shadow-xl  `
const Buttons = tw.div`mt-4`
const LeftBtn = tw.button`bg-redfood hover:bg-orangefood text-white text-xl mr-2 p-2 rounded-full shadow-xl`
const RightBtn = tw(LeftBtn)` bg-slate-200 hover:bg-slate-400 text-black`





