import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Wrapper,
  Head,
  Form,
  Label,
  Input,
  Error,
} from "./Form";

function ForgetPassNewPass(props) {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    navigate("/forgetpass/updatedpass");
  };

  const password = useWatch({ control, name: "password" });
  const isPasswordEqual = (cpassword) => cpassword === password;

  return (
    <Container className="signup-page ">
      <Wrapper>
        <Head className="text-center text-orangefood">Welcome</Head>

        <Form className="bg-white " onSubmit={handleSubmit(onSubmit)}>
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
            type="cpassword"
            placeholder="Confirm Password"
            id="cpassword"
            {...register("cpassword", {
              required: true,
              minLength: 5,
              validate: isPasswordEqual,
            })}
          />
          <Error>
            {errors.cpassword?.type === "required"
              ? "Password is required"
              : errors.cpassword?.type === "minLength"
              ? "Too Short"
              : errors.cpassword?.type === "validate"
              ? "Not equal to password"
              : ""}
          </Error>

          <Button type="submit">Next</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default ForgetPassNewPass;
