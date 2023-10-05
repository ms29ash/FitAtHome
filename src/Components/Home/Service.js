import React from 'react'

function Service({ service }) {
    return (
        <div className="flex  flex-col items-center shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] aspect-[4/5] rounded-lg justify-center  " >
            <div className={`bg-[${service?.color}]/30 rounded-full p-4 `} >
                <img className="w-28" src={`/images/service/${service?.image}`} alt="" />

            </div>
            <div className="text-black text-center py-6 px-8" >
                <h2>{service?.title}</h2>
                <p className="text-gray-900  text-sm my-3" >{service?.description}</p>
            </div>
        </div>
    )
}

export default Service

