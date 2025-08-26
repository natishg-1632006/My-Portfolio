import profile from '/image/profile2.jpg'
import { CgArrowRightO } from 'react-icons/cg';
const Home = () => {
    return (
        <>
            <div className=' flex flex-col-reverse justify-center md:justify-around h-screen items-center md:flex-row '>
                <div className='mb-10'>
                    <p className='text-2xl text-center md:text-justify font-semibold text-darkColor'>HELLO I AM</p>
                    <h1 className='text-5xl text-center md:text-justify md:text-7xl mt-4 font-extrabold text-darkColor'> NATISH G,</h1>
                    <p className='text-2xl text-center md:text-justify font-semibold mt-3 text-lightColor'>MERN Stack Developer</p>
                    <p className='max-w-100 text-center md:text-justify text-sm leading-loose mt-3 text-gray-500'>I’m a MERN Stack and WordPress Developer passionate about creating modern, user-friendly web solutions.
                        I enjoy building interactive applications and dynamic websites that bring ideas to life.
                    </p>
                    <div className='mt-2 flex justify-center md:justify-start '>
                        <button className='flex items-center  py-3 px-2 bg-darkColor text-backgroundColor rounded-md cursor-pointer shadow-md hover:bg-green-900'>Download CV 
                           <CgArrowRightO className='ml-3 text-xl font-bold text-backgroundColor'/>
                        </button>
                    </div>
                </div>
                <div className='mb-10' >
                    <img
                        className="w-75 h-75 rounded-full object-cover lg:w-100 lg:h-100"
                        src={profile}
                        alt="profile"
                    />
                </div>
            </div>
        </>
    )
}

export default Home
