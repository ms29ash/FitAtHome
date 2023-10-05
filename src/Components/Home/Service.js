import React from 'react'

function Service({ service }) {
    return (
        <div className="flex  flex-col items-center shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] aspect-[4/6] md:aspect-[4/5] overflow-hidden rounded-lg justify-center  " >
            <div className={`bg-[${service?.color}]/30 rounded-full p-2 xl:p-4 mb-4 lg:!mb-8 w-[50%] `} >
                <img className=" w-full aspect-square " src={`/images/service/${service?.image}`} alt="" />

            </div>
            <div className="text-black text-center px-[10%] w-full  xl:px-8" >
                <h2 className="text-base md:!text-2xl  " >{service?.title}</h2>
                <p className="text-gray-900  text-sm md:!text-base my-3" >{service?.description}</p>
            </div>
        </div>
    )
}

export default Service

