import tw from 'tailwind-styled-components';
import React from 'react'
import { Link } from 'react-router-dom'

const Container = tw.div`py-24 w-screen h-screen  grid place-items-center`;
const Wrapper = tw.div`bg-white w-[95vw]  max-w-[500px] shadow-xl rounded-lg  mx-auto px-8 pb-12 pt-6 `;
const Head = tw.h1`text-center text-redfood`;
const Form = tw.form`bg-white`;
const Label = tw.label`ml-3 text-redfood font-bold`;
const Input = tw.input`w-full py-2 px-3  border-b-2 !outline-none border-black`;
const Error = tw.div`h-5 text-redfood text-xs ml-2`;
const Errors = tw.div`h-5 text-center text-redfood text-sm ml-2`;
const Text = tw.p`mt-5 text-sm text-center`;
const Button = tw.button` disabled:opacity-40 !bg-redfood text-center w-full px-5 py-2 text-white rounded-full hover:!bg-orangefood cursor-pointer font-bold mt-4`;
const Logo = tw.img`w-20
 mb-[3vh] mx-auto`
export { Container, Errors, Button, Wrapper, Head, Form, Label, Input, Error, Text, Logo }

function BrandLogo() {
    return (
        <Link to="/">
            <Logo src="/images/Logo.png" alt="" />
        </Link>
    )
}

export default BrandLogo