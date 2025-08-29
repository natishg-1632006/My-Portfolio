import farmotek from '/image/Farmotek.png'
import { useState } from "react";

const Projects = () => {
    const [flipped1, setFlipped1] = useState(false);
    const [flipped2, setFlipped2] = useState(false);
    return (
        <>

            <div className='w-full mx-10'>
                <p className='text-4xl font-bold text-darkColor'>Projects</p>
                <div id='Projects' className='py-20 px-10 flex flex-wrap gap-15'>

                    <div className="group perspective w-70 h-80 cursor-pointer" onClick={() => setFlipped1(!flipped1)}>

                        <div className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped1 ? "rotate-x-180" : ""
                            }`}>

                            <div className="absolute p-2 w-full h-full bg-greenlight rounded-xl backface-hidden">
                                <img className='shadow-md' src={farmotek} alt="Farmotek" />
                                <p className='text-xl font-bold text-darkColor mt-2'>E-Commerce Website</p>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    <span className='projectTags'>Wordpress</span>
                                    <span className='projectTags'>SEO</span>
                                    <span className='projectTags'>Payment gatway</span>
                                    <p className='text-[11.5px] text-center mt-3'>Built a responsive e-commerce website for Farmotek using WordPress with SEO optimization, product catalog, and secure payment gateway.</p>
                                </div>
                            </div>
                            <div className="absolute p-2 text-darkColor font-semibold flex justify-center items-center w-full h-full bg-greenlight  rounded-xl rotate-x-180 backface-hidden">
                                <p className='text-[13.5px] text-center'>
                                    Developed a fully functional e-commerce platform using WordPress for Farmotek, an agricultural machinery retail shop based in Namakkal. The website includes a modern and responsive design, product catalog with detailed descriptions, secure shopping cart and checkout system, and integrated payment gateway. Optimized for SEO and user-friendly navigation to enhance customer experience and drive online sales.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="group perspective w-70 h-80 cursor-pointer" onClick={() => setFlipped2(!flipped2)}>

                        <div className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped2 ? "rotate-x-180" : ""
                            }`}>

                            <div className="absolute p-2 w-full h-full bg-greenlight rounded-xl backface-hidden">
                                <img className='shadow-md' src={farmotek} alt="Farmotek" />
                                <p className='text-xl font-bold text-darkColor mt-2'>E-Commerce Website</p>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    <span className='projectTags'>Wordpress</span>
                                    <span className='projectTags'>SEO</span>
                                    <span className='projectTags'>Payment gatway</span>
                                    <p className='text-[11.5px] text-center mt-3'>Built a responsive e-commerce website for Farmotek using WordPress with SEO optimization, product catalog, and secure payment gateway.</p>
                                </div>
                            </div>
                            <div className="absolute p-2 text-darkColor font-semibold flex justify-center items-center w-full h-full bg-greenlight  rounded-xl rotate-x-180 backface-hidden">
                                <p className='text-[13.5px] text-center'>
                                    Developed a fully functional e-commerce platform using WordPress for Farmotek, an agricultural machinery retail shop based in Namakkal. The website includes a modern and responsive design, product catalog with detailed descriptions, secure shopping cart and checkout system, and integrated payment gateway. Optimized for SEO and user-friendly navigation to enhance customer experience and drive online sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Projects
