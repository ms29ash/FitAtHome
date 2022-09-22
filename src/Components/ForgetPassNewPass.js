import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";


function ForgetPassNewPass(props) {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ criteriaMode: "all" });

    const navigate = useNavigate();
    const onSubmit = (data, e) => {
        navigate('updatedpass')
    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <Container className="signup-page ">
            <Wrapper>
                <Head className="text-center text-orangefood">Welcome</Head>

                <Form className="bg-white " onSubmit={(onSubmit)}>


                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        placeholder="Password"
                        id="password"
                        {...register("password", { required: true, minLength: 5 })}
                    />
                    <Error>
                        {errors.password?.type === "required"
                            ? "Password is required"
                            : errors.password?.type === "minLength"
                                ? "Too Short"
                                : ""}
                    </Error>
                    <Label htmlFor="cpassword">Confirm Password</Label>
                    <Input
                        type="password"
                        placeholder="Password"
                        id="cpassword"
                        {...register("password", { required: true, minLength: 5 })}
                    />
                    <Error>
                        {errors.password?.type === "required"
                            ? "Password is required"
                            : errors.password?.type === "minLength"
                                ? "Too Short"
                                : ""}
                    </Error>

                    <Button type="submit">Next</Button>
                </Form>

            </Wrapper>
        </Container>
    );
}

export default ForgetPassNewPass;

const Container = tw.div`py-24 w-screen h-screen mt-[10vh]`;
const Wrapper = tw.div`bg-white w-[95vw]  max-w-[600px] shadow-xl rounded-lg  mx-auto px-8 py-12 `;
const Head = tw.h1`text-center text-orangefood`;
const Form = tw.form`bg-white`;
const Label = tw.label`ml-3 text-greenfood`;
const Input = tw.input`w-full py-2 px-3  border-b-2 !outline-none border-greenfood`;
const Error = tw.div`h-5 text-redfood text-xs ml-2`;
const Text = tw.p`mt-5 text-sm text-center`;
const Button = tw.button`!bg-redfood text-center w-full px-5 py-2 text-white rounded-full hover:!bg-orangefood cursor-pointer`;
