import React from 'react'
import { Link } from "react-router-dom";
import subscribeImg from '../images/subscribe.jpg'

function Subscribe() {
    return (
        <>

            <section className="xl:px-[10vw] pt-12 flex  justify-center  align-center items-center -m-5 subscribe bg-transparent pb-10 xl:pb-44" id="subscribe">

                <div className="card-container   bg-white justify-center shadow-xl px-12 md:px-16 flex flex-col  ">
                    <h1 className=" text-black headings text-center  ">Subscribe to Get Best Food</h1>
                    <div className="flex  items-center flex-col lg:flex-row xl:pb-8 ">
                        <img className="w-full md:w-[50%] " src={subscribeImg} alt="....." />
                        <div className="text flex flex-col bg-white p-4 justify-center " >
                            <h1 className="text-2xl text-center xl:text-left font-bold"> Food</h1>
                            <p className="mb-3 text-center xl:text-left"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis saepe laborum iste veniam facilis error vitae distinctio inventore sapiente et Expedita.
                            </p>
                            <Link to="/subscribe" className=" lg:w-3/5 w-full text-center hover:bg-orangefood bg-redfood text-white font-bold xl:mx-0  lg:mx-auto px-2 py-4 rounded-md">Subscribe Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )



}


export default Subscribe







