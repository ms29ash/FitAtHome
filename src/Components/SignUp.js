import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../Styles/SignUp.css'


function SignUp(props) {
    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });
    useEffect(() => {
        props.setProgress(100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);



    return (
        <div className="signup-page py-24 w-screen  mt-[10vh]">
            <div className=" bg-white md:w-[50%] w-[70%] shadow-xl rounded-lg  mx-auto px-8 py-12 ">
                <h1 className="text-center text-orangefood">Welcome</h1>

                <form className="bg-white " onSubmit={handleSubmit(onSubmit, onError)} >
                    <label htmlFor="name" className="ml-3 text-greenfood">Name</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" placeholder="Name" type="text" id="name" {...register("name", { required: true, minLength: 2 })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.email?.type === 'required' ? "Email is required" : errors.email?.type === 'minLength' ? "Enter Valid Name" : ""}
                    </div>
                    <label htmlFor="email" className="ml-3 text-greenfood">Email</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" placeholder="Email" type="email" id="email"  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.email?.type === 'required' ? "Email is required" : errors.email?.type === 'pattern' ? "Invalid email" : ""}
                    </div>


                    <label htmlFor="password" className="ml-3 text-greenfood">Password</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" type="password" placeholder="Password" id="password"   {...register("password", { required: true, minLength: 5 })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.password?.type === 'required' ? "Password is required" : errors.password?.type === 'minLength' ? "Too Short" : ""}
                    </div>
                    <label htmlFor="cpassword" className="ml-3 text-greenfood">Confirm Password</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" type="password" placeholder="Password" id="cpassword"   {...register("password", { required: true, minLength: 5 })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.password?.type === 'required' ? "Password is required" : errors.password?.type === 'minLength' ? "Too Short" : ""}
                    </div>

                    <button className=" !bg-redfood text-center w-full px-5 py-2 text-white rounded-lg hover:!bg-orangefood cursor-pointer" type="submit" >Sign In</button>
                </form>
                <p className="mt-5 text-sm text-center">Already have an account <Link className="hover:text-orangefood underline" to='/signin'>Sign In</Link>  </p>

            </div >
        </div>
    )
}

export default SignUp
