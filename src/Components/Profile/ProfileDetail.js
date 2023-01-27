import React from 'react'
import tw from 'tailwind-styled-components'
import { Button } from '../Form'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'


function ProfileDetail() {
    return (
        <Container>
            <Personal>
                <Img src="/profile.jpg" alt="" />
                <div>

                    <Name>Mohit Basera</Name>
                    <div className="flex items-center" >

                        <Email><AiOutlineMail className="mr-1" />  ms29ash@gmail.com</Email>
                        <Phone><AiOutlinePhone className="mr-1" />  9634389137</Phone>
                    </div>
                </div>
            </Personal>
            <Btn>Edit</Btn>

        </Container>
    )
}

export default ProfileDetail

const Container = tw.div`flex items-center justify-between w-[98%] h-[20vh] border-b-2 border-b-black `
const Personal = tw.div`flex items-center`
const Img = tw.img`w-12 h-12 object-cover rounded-full mr-4 `
const Name = tw.h1``
const Email = tw.p`flex items-center text-sm mr-2 `
const Phone = tw.p`flex items-center text-sm`

const Btn = tw.button`w-20 border-redfood border-[2px] bg-white text-redfood hover:text-orangefood hover:border-orangefood  text-center  px-5 py-2  rounded-full  cursor-pointer font-bold`
