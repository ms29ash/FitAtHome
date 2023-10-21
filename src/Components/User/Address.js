import React from 'react'
import tw from 'tailwind-styled-components'
import { MdModeEditOutline } from 'react-icons/md'


function Address({ isDefault }) {
    return (
        <Container>
            <div className='relative' >
                <Head>Home</Head>

                <Items>Nilmattha, Lucknow, Uttarpradesh </Items>
                <EditBtn>Edit</EditBtn>

            </div>
            <hr className="my-3" />
            <Bottom>
                {isDefault === true ? <Def  >Default</Def> : ''}
                <Buttons>
                    <DefaultBtn>SET AS DEFAULT</DefaultBtn>
                </Buttons>
            </Bottom>

        </Container>
    )
}

export default Address





const Container = tw.div`rounded shrink-0 w-[31%] mr-[1%]  shadow-xl p-4 mb-6`
const Head = tw.h1`text-lg`
const Def = tw.p`top-1 right-1 text-xs absolute`
const Bottom = tw.div`flex justify-between relative`
const Items = tw.p`text-sm`
const Buttons = tw.div`flex items-center`
const EditBtn = tw.button`  text-redfood text-sm hover:text-orangefood absolute right-2 top-1`
const DefaultBtn = tw.button` rounded-full bg-slate-100  hover:bg-slate-100 text-xs hover:border-orangefood hover:shadow-xl   shadow-lg px-4 text-black py-2 `