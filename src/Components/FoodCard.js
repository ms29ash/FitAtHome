import React, { useEffect, useState } from 'react'

function FoodCard(props) {
    let { image, type, name, description, price } = props.foodItem;
    let [color, setColor] = useState()
    let [side, setSide] = useState()
    let [text, setText] = useState()

    useEffect(() => {
        setColor(type === 'Vegan' ? 'green-600' : type === 'Veg' ? 'green-900' : 'red-900')
        setText(type === 'Vegan' ? "v" : '')
        setSide(type === 'Vegan' ? 'text-' : 'bg-')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <>
            <div className="scroll-end scroll-mx-6 shrink-0" >
                <div className="bg-white card-container my-5 shadow-xl rounded-md w-[250px] h-[18rem]">
                    <a href="/">
                        <img src={image} alt="" className="rounded-t-md object-cover w-[250px] h-[187px]" />
                        <div className={`absolute top-6 ml-2 bg-white border-2 border-solid border-${color}`}>
                            <div className={`font-bold text-3xl flex justify-center items-center text-center m-1 rounded-full w-5 h-5 ${side}-${color} `}>
                                {text}
                            </div>
                        </div>
                        <div className="text p-[8px]">

                            <h1 className="text-2xl font-bold hover:text-orangefood">{name}</h1>
                            {/* <p className="mb-3">{description}</p> */}
                            {/* <p className=" mb-3 absolute bottom-12 text-redfood text-2xl font-bold hover:text-orangefood">{price}</p> */}


                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FoodCard
