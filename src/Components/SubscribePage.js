import React, { useEffect, useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SubscribePage(props) {

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
                    <label htmlFor="phone" className="ml-3 text-greenfood">Phone</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" placeholder="Phone" type="number"  {...register("phone", { minLength: 10, maxLength: 10 })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.email?.type === 'minLength' ? "Enter valid Phone" : errors.email?.type === 'maxLength' ? "Enter valid Phone" : ""}
                    </div>


                    <label htmlFor="date" className="ml-3 text-greenfood">Date</label>
                    <input className="w-full py-2 px-3  border-b-2 !outline-none border-greenfood" type="date" id="date"   {...register("date", { required: true })} />
                    <div className="h-5 text-redfood text-xs ml-2">

                        {errors.password?.type === 'required' ? "Password is required" : errors.password?.type === 'minLength' ? "Too Short" : ""}
                    </div>

                    <label htmlFor="months" className="ml-3 text-greenfood">Months</label>
                    <select id="months"{...register('months')}>
                        <option className="bg-greenfood" value="female">1</option>
                        <option value="male">2</option>
                        <option value="other">3</option>

                    </select>





                    <p className="mt-5 text-sm text-center"> <Link className="hover:text-orangefood text-grayfood" to='/forgetpass'>Forget Password</Link>  </p>

                    <button className=" !bg-redfood text-center w-full px-5 py-2 text-white rounded-lg hover:!bg-orangefood cursor-pointer" type="submit" >Sign In</button>
                </form>
                <p className="mt-5 text-sm text-center">Create an account <Link className="hover:text-orangefood underline" to='/signup'>SignUp</Link>  </p>

            </div >
        </div>
    )
}

export default SubscribePage
