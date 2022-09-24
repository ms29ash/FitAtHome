import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Wrapper, Form, Label, Input, Error, Text } from './Form'



export default function ForgetPass() {

    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });


    const onSubmit = (e) => {

        navigate('otp')
    }


    return (
        <Container className="signin-page ">
            <Wrapper >


                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Label htmlFor="email" >Email</Label>
                    <Input placeholder="Enter your email" type="email"  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                    <Error >

                        {errors.email?.type === 'required' ? "Email is required" : errors.email?.type === 'pattern' ? "Invalid email" : ""}
                    </Error>


                    <Button type="submit" >Next</Button>
                </Form>
                <Text><Link className="hover:text-orangefood underline" to='/signin'>SignIn</Link>  </Text>

            </ Wrapper>
        </Container>
    )
}

