import React, { useEffect, useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../Styles/SignIn.css'



function SignIn(props) {

    const [user, setUser] = useState({ email: "", password: "" })
    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });
    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const onSubmit = (e) => {

        console.log('submit')
    }


    return (
        <div className="signin-page py-24 w-screen h-screen mt-[10vh]">
            <div className=" bg-white md:w-[50%] w-[70%] shadow-xl rounded-lg  mx-auto px-8 py-12 ">
                <h1 className="text-center text-orangefood">Welcome</h1>

                <form className="bg-white " onSubmit={handleSubmit(onSubmit)} >
                    <label htmlFor="email" className="ml-3 text-greenfood">Email</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" placeholder="Email" type="email"  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.email?.type === 'required' ? "Email is required" : errors.email?.type === 'pattern' ? "Invalid email" : ""}
                    </div>
                    <br />


                    <label htmlFor="Password" className="ml-3 text-greenfood">Password</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" type="password" placeholder="Password"   {...register("password", { required: true, minLength: 5 })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.password?.type === 'required' ? "Password is required" : errors.password?.type === 'minLength' ? "Too Short" : ""}
                    </div>
                    <p className="mt-5 text-sm text-center"> <Link className="hover:text-orangefood text-grayfood" to='/forgetpass'>Forget Password</Link>  </p>
                    <br />

                    <button className=" !bg-redfood text-center w-full px-5 py-2 text-white rounded-lg hover:!bg-orangefood cursor-pointer" type="submit" >Sign In</button>
                </form>
                <p className="mt-5 text-sm text-center">Create an account <Link className="hover:text-orangefood underline" to='/signup'>SignUp</Link>  </p>

            </div >
        </div>
    )
}

export default SignIn
