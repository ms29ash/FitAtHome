import React from 'react'
import tw from 'tailwind-styled-components'


function Address() {
    return (
        <Container>
            <div>
                <Head>Home</Head>

                <Items>Nilmattha, Lucknow, Uttarpradesh </Items>

            </div>
            <hr className="my-3" />
            <Bottom>
                <Buttons>
                    <EditBtn>EDIT</EditBtn>
                    <DefaultBtn>SET DEFAULT</DefaultBtn>
                </Buttons>
                <p className="ml-10" >Default</p>
            </Bottom>

        </Container>
    )
}

export default Address





const Container = tw.div`border-[2px] border-slate-300 w-full p-4 mb-6`
const Head = tw.h1`text-lg`
const Bottom = tw.div`flex justify-between`
const Items = tw.p`text-sm`
const Buttons = tw.div`flex items-center`
const EditBtn = tw.button`bg-redfood font-bold text-white text-sm py-2 px-8 rounded-lg mr-2 hover:bg-orangefood`
const DefaultBtn = tw(EditBtn)`bg-white border-redfood hover:bg-white hover:text-orangefood hover:border-orangefood border-2 px-2 text-redfood `