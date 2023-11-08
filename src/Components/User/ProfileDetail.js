import React from "react";
import tw from "tailwind-styled-components";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function ProfileDetail() {
  return (
    <Container>
      <Personal>
        <Img src="/profile.jpg" alt="" />
        <div>
          <Name>Mohit Basera</Name>
          <div className="flex items-center">
            <Email>
              <AiOutlineMail className="mr-1" /> ms29ash@gmail.com
            </Email>
            <Phone>
              <AiOutlinePhone className="mr-1" /> 9634389137
            </Phone>
          </div>
        </div>
      </Personal>
      <Btn>
        <p className="z-10 relative">Edit</p>
      </Btn>
    </Container>
  );
}

export default ProfileDetail;

const Container = tw.div`flex items-center justify-between w-full px-[2.5%] py-[1.5rem] my-[1rem] shadow-md  bg-white rounded-lg `;
const Personal = tw.div`flex items-center`;
const Img = tw.img`w-12 h-12 object-cover rounded-full mr-4 `;
const Name = tw.h1`text-gray-900`;
const Email = tw.p`flex text-gray-700 items-center text-base mr-2 `;
const Phone = tw.p`flex text-gray-700 items-center text-base`;

const Btn = tw.button` bg-ssorange text-white text-center   py-3  rounded-lg px-10  cursor-pointer font-bold   before:bg-ssgreen hover-btn`;
