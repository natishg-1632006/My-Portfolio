import farmotek from '/image/Farmotek.png'


const Projects = () => {
    return (
        <>
            <div id='Projects' className='py-20 mx-10'>
                <p className=' text-4xl font-bold text-darkColor'>Projects</p>
                <div className='flex flex-col justify-cente'>
                    <div className='mt-8 w-75 flex flex-col justify-center cursor-pointer shadow-2xl shadow-emerald-700 rounded-md p-2'>
                        <div className='max-w-full h-auto object-cover'>
                            <img src={farmotek} alt="farmotek" />
                        </div>
                        <div>
                            <p className='text-xl font-bold text-darkColor mt-5'>E-Commerce Website</p>
                            <div className='my-2'>
                                <span className='projectCard'>Wordpress</span>
                                <span className='projectCard'>SEO</span>
                                <span className='projectCard'>Payment Gateway</span>
                            </div>
                            <p className='text-justify'>
                               Developed a responsive WordPress e-commerce website for Farmotek Agriculture Machinery, Namakkal with product catalog and secure checkout. Optimized for SEO, mobile usability, and smooth customer experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
