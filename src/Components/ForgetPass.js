import React, { useEffect, useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import tw from 'tailwind-styled-components'
import Timer from './Timer'



export default function ForgetPass() {

    const [user, setUser] = useState({ email: "", password: "" })
    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });



    const onSubmit = (e) => {

        console.log('submit')
    }


    return (
        <Container className="signin-page ">
            <Wrapper >
                <Head>Welcome</Head>

                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Label htmlFor="otp" >OTP</Label>
                    <Input id="otp" placeholder="4 digit code" type="tel" inputMode="numeric"
                        maxLength="4"  {...register("otp", { required: true, maxLength: 4, minLength: 4, max: 4, min: 4, pattern: /^[0-9]{4}$/i })} />
                    <Error >

                        {errors.otp?.type === 'required' ? "OTP is required" : errors.otp?.type === 'pattern' ? "Invalid otp" : ""}
                    </Error>
                    <Timer />





                    <Button type="submit" >Sign In</Button>
                </Form>
                <Text>Create an account <Link className="hover:text-orangefood underline" to='/signup'>SignUp</Link>  </Text>

            </ Wrapper>
        </Container>
    )
}



const Container = tw.div`py-24 w-screen h-screen mt-[10vh]`
const Wrapper = tw.div`bg-white w-[95vw] max-w-[600px] shadow-xl rounded-lg  mx-auto px-8 py-12 `
const Head = tw.h1`text-center text-orangefood`
const Form = tw.form`bg-white w-full `
const Label = tw.label`ml-3 text-greenfood`
const Input = tw.input`w-full py-2 px-3  border-b-2 !outline-none border-greenfood`
const Error = tw.div`h-5 text-redfood text-xs ml-2`
const Text = tw.p`mt-5 text-sm text-center`
const Button = tw.button`!bg-redfood text-center w-full px-5 py-2 text-white rounded-full hover:!bg-orangefood cursor-pointer `