import React, { useEffect, useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Container, Button, Wrapper, Head, Form, Label, Input, Error, Text } from './Form'



function SignIn() {

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
                    <Label htmlFor="email" >Email</Label>
                    <Input placeholder="Email" type="email"  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                    <Error >

                        {errors.email?.type === 'required' ? "Email is required" : errors.email?.type === 'pattern' ? "Invalid email" : ""}
                    </Error>
                    <br />


                    <Label htmlFor="Password" >Password</Label>
                    <Input type="password" placeholder="Password"   {...register("password", { required: true, minLength: 5 })} />
                    <Error>

                        {errors.password?.type === 'required' ? "Password is required" : errors.password?.type === 'minLength' ? "Too Short" : ""}
                    </Error>
                    <Text> <Link className="hover:text-orangefood text-grayfood" to='/forgetpass'>Forget Password</Link>  </Text>
                    <br />

                    <Button type="submit" >Sign In</Button>
                </Form>
                <Text>Create an account <Link className="hover:text-orangefood underline" to='/signup'>SignUp</Link>  </Text>

            </ Wrapper>
        </Container>
    )
}

export default SignIn
