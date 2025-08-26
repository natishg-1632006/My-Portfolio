import React from 'react'
import profile from '/image/profile2.jpg'

const About = () => {
    return (
        <>
            <div className='ml-10 '>
                <h2 className='text-3xl font-extrabold text-darkColor'>About Me</h2>
            </div>
            <div className=' flex flex-col my-15 items-center md:justify-around h-screen md:mt-25  md:flex-row md:items-start'>
                <div className='mb-10' >
                    <img
                        className="w-75 h-75 rounded-full object-cover lg:w-100 lg:h-100"
                        src={profile}
                        alt="profile"
                    />
                </div>
                <div>
                    <p className='max-w-100 text-center md:text-justify  text-sm leading-loose mt-3  lg:max-w-150 lg:leading-10 lg:text-[16px]'>
                    I am a passionate web developer skilled in MERN stack and WordPress, specializing in responsive, dynamic websites and web applications. With expertise in MongoDB, Express.js, React, Node.js, and WordPress customization, I deliver seamless user experiences and robust functionality. I focus on intuitive UI/UX, secure backends, and scalable solutions, with additional skills in API integration, database design, and cloud deployment. Combining creativity with technical expertise, I transform ideas into impactful digital products that drive growth and engagement.
                    </p>
                </div>
            </div>

        </>
    )
}

export default About
