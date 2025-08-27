
const Skills = () => {
    return (
        <>
            <div id="Skills">
                <div className='ml-10 mt25 pt-25'>
                    <h2 className='text-4xl font-extrabold text-darkColor '>Skills</h2>
                </div>
                <div className="flex justify-center">
                <div className="m-10 flex flex-wrap justify-center gap-15">
                    <div className="skillsContainer">
                        <p className="skillsTitle">Frontend Development</p>
                    </div>
                    <div className="skillsContainer">
                        <p className="skillsTitle">Backend Development</p>
                    </div >
                    <div className="skillsContainer">
                        <p className="skillsTitle">Databases</p>
                    </div>
                    <div className="skillsContainer">
                        <p className="skillsTitle">Programming Languages</p>
                    </div>
                    <div className="skillsContainer">
                        <p className="skillsTitle">Tools & Version Control</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Skills
