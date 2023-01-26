import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../features/auth/authSlice";
import BrandLogo, { Container, Button, Wrapper, Form, Label, Input, Error, Text, Errors } from './Form'

function SignUp(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth)
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data, e) => {
    dispatch(signupUser(data)).unwrap().then((auth) => {
      if (auth.success === true) {
        navigate('verify')
      }

    })
  };


  const password = useWatch({ control, name: 'password' })
  const isPasswordEqual = (cpassword) => cpassword === password;


  return (
    <Container className="signup-page ">
      <Wrapper>
        <BrandLogo />
        <Errors>{error}</Errors>
        <Form className="bg-white " onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Name"
            type="text"
            id="name"
            {...register("name", { required: true, minLength: 2 })}
          />
          <Error>
            {errors.name?.type === "required"
              ? "Name is required"
              : errors.name?.type === "minLength"
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
            control={control}
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
            placeholder="Confirm Password"
            id="cpassword"
            {...register("cpassword", { required: true, minLength: 5, validate: isPasswordEqual })}
          />
          <Error>
            {errors.cpassword?.type === "required"
              ? "Password is required"
              : errors.cpassword?.type === "minLength"
                ? "Too Short"
                : errors.cpassword?.type === 'validate' ? "Not equal to password" : ""}
          </Error>

          <Button disabled={loading} type="submit">Next</Button>
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

