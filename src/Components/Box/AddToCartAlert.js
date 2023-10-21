import React from 'react';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx'

const CustomToast = (img, title, msg, type) => {
    toast.custom((t) => (
        <div
            className='flex rounded-lg items-center bg-white p-4 b-2 shadow-[0_4px_6px_rgba(0,0,0,0.1)] relative '
        >
            <img
                src={img} // Replace with your image path
                alt="Product"
                className='w-12 aspect-square object-cover mr-2'
            />
            <div>
                <h3 className='min-w-[200px] mb-2 text-gray-900 text-lg'>{msg}</h3>
                <p style={{ fontSize: '14px' }}>{title}</p>
            </div>
            <div className="top-4 absolute right-2 w-6 " >

                {type === 'success' ? <img className="" src="/images/tick.png" alt="" /> :
                    <div className="bg-redfood text-white p-1 rounded-full " >
                        <RxCross2 />
                    </div>
                }
            </div>
        </div>
    ));
};

CustomToast.defaultProps = {
    img: "",
    title: "",
    msg: "",
    type: ""
};


export default CustomToast;
