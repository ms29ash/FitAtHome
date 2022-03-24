import React from 'react'
import '../Styles/Hero.css'


function Hero() {
    return (
        <>
            <div className="carousel-container">
                <div className="carousel">
                    <div className="image-one"   ></div>
                    <div className="image-two"
                    ></div>.
                    <div className="image-three" ></div>
                </div>
            </div >
            <div className="text-right font-bold">
                <div className="bg-hero text-center w-1/2" >
                    <div className="md:py-[20vh] py-[10vh] absolute right-0 left-0 w-screen text-center top-0 bg-hero h-[44vh] md:h-[80vh] " >
                        <p className="text-white text-2xl md:text-5xl md:leading-relaxed leading-8">
                            Eat less from a box
                        </p>
                        <p className="text-orangefood text-2xl md:text-5xl md:leading-relaxed leading-8">
                            and more
                        </p>
                        <p className="text-white text-2xl md:text-5xl md:leading-relaxed leading-8">
                            from the earth
                        </p>
                        {/* <a href='/' className="text-center md:text-2xl  hover:bg-orangefood bg-redfood rounded-3xl px-3 md:px-5 py-1 md:py-2 lg:px-10  text-white text-xl lg:text-2xl mt-16 mx-auto">
                            Get Healthy Food Now
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
