import farmotek from '/image/Farmotek.png'
import ToDo from '/image/ToDolist.png'
import Expense from '/image/Expense.png'
import { useState } from "react";

const Projects = () => {
    const [flipped1, setFlipped1] = useState(false);
    const [flipped2, setFlipped2] = useState(false);
    const [flipped3, setFlipped3] = useState(false);
    return (
        <>

            <div id='Projects' className='mx-10 py-20'>
                <p className='text-4xl font-bold text-darkColor'>Projects</p>
                <div className='py-10 gap-10 flex flex-wrap justify-center'>

                    <div className="group perspective w-75 h-80 cursor-pointer" onClick={() => setFlipped1(!flipped1)}>

                        <div className={`relative w-full h-full duration-700 transform-style-preserve-3d hover:scale-105 ${flipped1 ? "rotate-x-180" : ""
                            }`}>

                            <div className="absolute p-2 w-full h-full bg-greenlight rounded-xl backface-hidden">
                                <img className='shadow-md h-35 w-full' src={farmotek} alt="Farmotek" />
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

                    <div className="group perspective w-75 h-80 cursor-pointer" onClick={() => setFlipped2(!flipped2)}>

                        <div className={`relative w-full h-full duration-700 transform-style-preserve-3d hover:scale-105 ${flipped2 ? "rotate-x-180" : ""
                            }`}>

                            <div className="absolute p-2 w-full h-full bg-greenlight rounded-xl backface-hidden">
                                <img className='shadow-md h-35 w-full' src={Expense} alt="Farmotek" />
                                <p className='text-xl font-bold text-darkColor mt-2'>Expense tracker</p>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    <span className='projectTags'>React</span>
                                    <span className='projectTags'>Node</span>
                                    <span className='projectTags'>Express</span>
                                    <span className='projectTags'>MongoDB</span>
                                    <p className='text-[11.5px] text-center mt-3'>Developed an Expense Tracker using the MERN stack with CRUD operations, search, and filter. Designed a responsive UI for easy expense management and smooth user experience.</p>
                                </div>
                            </div>
                            <div className="absolute p-2 text-darkColor font-semibold flex justify-center items-center w-full h-full bg-greenlight  rounded-xl rotate-x-180 backface-hidden">
                                <p className='text-[13.5px] text-center'>
                                   Built a full-stack Expense Tracker using the MERN stack with features to add, edit, and delete expenses. Implemented search and filter functionality for quick data access. Designed a responsive and intuitive UI for smooth user experience. Ensured secure and efficient data handling with MongoDB and Express backend.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group perspective w-75 h-80 cursor-pointer" onClick={() => setFlipped3(!flipped3)}>

                        <div className={`relative w-full h-full duration-700 transform-style-preserve-3d hover:scale-105 ${flipped3 ? "rotate-x-180" : ""
                            }`}>

                            <div className="absolute p-2 w-full h-full bg-greenlight rounded-xl backface-hidden">
                                <img className='shadow-md h-35 w-full' src={ToDo} alt="Farmotek" />
                                <p className='text-xl font-bold text-darkColor mt-2'>ToDo List</p>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    <span className='projectTags'>React</span>
                                    <span className='projectTags'>Node</span>
                                    <span className='projectTags'>Express</span>
                                    <span className='projectTags'>MongoDB</span>
                                    <p className='text-[11.5px] text-center mt-3'>Developed a To-Do List application using the MERN stack. It allows users to add, edit, delete, and manage daily tasks efficiently.</p>
                                </div>
                            </div>
                            <div className="absolute p-2 text-darkColor font-semibold flex justify-center items-center w-full h-full bg-greenlight  rounded-xl rotate-x-180 backface-hidden">
                                <p className='text-[13.5px] text-center'>
                                   I developed a To-Do List application using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to add, edit, delete, and mark tasks as completed, ensuring efficient task management. It implements full CRUD functionality with RESTful APIs for smooth data handling. The backend is built with Node.js and Express, while MongoDB provides secure and scalable storage. The user interface is designed with React for a clean, responsive, and seamless experience.
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
