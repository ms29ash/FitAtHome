import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

function SignUp(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <Container className="signup-page ">
      <Wrapper>
        <Head className="text-center text-orangefood">Welcome</Head>

        <Form className="bg-white " onSubmit={handleSubmit(onSubmit, onError)}>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Name"
            type="text"
            id="name"
            {...register("name", { required: true, minLength: 2 })}
          />
          <Error>
            {errors.email?.type === "required"
              ? "Email is required"
              : errors.email?.type === "minLength"
              ? "Enter Valid Name"
              : ""}
          </Error>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          <Error>
            {errors.email?.type === "required"
              ? "Email is required"
              : errors.email?.type === "pattern"
              ? "Invalid email"
              : ""}
          </Error>

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

          <Button type="submit">Sign In</Button>
        </Form>
        <Text>
          Already have an account{" "}
          <Link className="hover:text-orangefood underline" to="/signin">
            Sign In
          </Link>{" "}
        </Text>
      </Wrapper>
    </Container>
  );
}

export default SignUp;

const Container = tw.div`py-24 w-screen h-screen mt-[10vh]`;
const Wrapper = tw.div`bg-white w-[95vh] max-w-[600px] shadow-xl rounded-lg  mx-auto px-8 py-12 `;
const Head = tw.h1`text-center text-orangefood`;
const Form = tw.form`bg-white`;
const Label = tw.label`ml-3 text-greenfood`;
const Input = tw.input`w-full py-2 px-3  border-b-2 !outline-none border-greenfood`;
const Error = tw.div`h-5 text-redfood text-xs ml-2`;
const Text = tw.p`mt-5 text-sm text-center`;
const Button = tw.button`!bg-redfood text-center w-full px-5 py-2 text-white rounded-full hover:!bg-orangefood cursor-pointer`;
