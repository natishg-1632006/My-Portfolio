import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className='py-20'>
                <p className='mx-5 text-4xl font-bold text-darkColor'>Contact</p>
                <div className='py-10 px-5 m-10 rounded-xl flex gap-5 flex-wrap md:flex-nowrap bg-greenlight'>
                    <div className='w-full shadow-custom1 duration-1000 rounded-md hover:shadow-2xl p-10 md:w-7/12 bg-backgroundColor h-70 flex flex-col justify-around'>
                        <div className='contactData'>
                            <IoMdMail className='contactLogo' />
                            <a href="https://mail.google.com/mail/u/0/#inbox" className='contactInfo'>natishg8@gmail.com</a>
                        </div>
                        <div className='contactData'>
                            <FaPhoneAlt className='contactLogo' />
                            <a className='contactInfo'>+91 9080691947</a>
                        </div>
                        <div className='contactData'>
                            <IoLocation className='contactLogo' />
                            <a className='contactInfo'>Namakkal</a>
                        </div>
                        <div className='contactData'>
                            <FaLinkedin className='contactLogo' />
                            <a href="https://www.linkedin.com/in/natishg2006/" className='contactInfo'>natishg2006</a>
                        </div>
                    </div>
                    <div className='w-full shadow-custom1 duration-1000 hover:shadow-2xl rounded-md p-3 bg-greenlight h-120'>
                        <div className='flex justify-center'>
                            <form className='flex flex-col p-3 gap-3'>
                                <label htmlFor="nameInput" className='formlable'>Name</label>
                                <input type="text" id='nameInput' placeholder='Enter Your name' className='inputBox' />
                                <label htmlFor="mailInput" className='formlable'>Email</label>
                                <input type="email" id='mailInput' placeholder='Enter Your Email' className='inputBox' />
                                <label htmlFor="subjectInput" className='formlable'>Subject</label>
                                <input type="text" id='subjectInput' placeholder='Subject' className='inputBox' />
                                <label htmlFor="messageInput" className='formlable'>Message</label>
                                <textarea id="messageInput" placeholder='Your Message' className='inputBox'></textarea>
                                <button className='bg-darkColor text-white my-3 py-2 rounded-md cursor-pointer lg:w-150'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
