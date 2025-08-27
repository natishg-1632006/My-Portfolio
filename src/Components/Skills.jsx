import React from '/image/React.png'
import Tailwind from '/image/tailwind.png'
import Wordpress from '/image/Wordpress.png'
import Figma from '/image/figma.png'
import Node from '/image/Node.png'
import Express from '/image/express.png'
import Firebase from '/image/firebase.png'
import Mysql from '/image/mysql.png'
import Mongodb from '/image/Mongo.png'
import c from '/image/c.png'
import java from '/image/java.png'
import js from '/image/js.png'
import git from '/image/git.png'
import github from '/image/github.png'
import postman from '/image/postman.png'
import vscode from '/image/vscode.png'

const Skills = () => {
    return (
        <>
            <div id="Skills">
                <div className='ml-10 pt-25'>
                    <h2 className='text-4xl font-extrabold text-darkColor '>Skills</h2>
                </div>
                <div className="flex justify-center ">
                    <div className="m-10 flex flex-wrap justify-center gap-15">
                        <div className="skillsContainer">
                            <p className="skillsTitle">Frontend Development</p>
                            <div className='flex flex-wrap justify-center gap-8 mt-8'>
                                <div className='allSkills'><img src={React} alt="React" /> <p className='text-sm p-2 text-center'>React.js</p></div>
                                <div className='allSkills'><img src={Tailwind} alt="" /> <p className='text-sm text-center'>Tailwind</p></div>
                                <div className='allSkills'><img src={Wordpress} alt="Wordpress" /><p className='text-sm text-center'>Wordpress</p></div>
                                <div className='allSkills'><img src={Figma} alt="Figma" /><p className='text-sm text-center'>Figma</p></div>
                            </div>
                        </div>
                        <div className="skillsContainer">
                            <p className="skillsTitle">Backend Development</p>
                            <div className='flex flex-wrap justify-center gap-5 mt-8'>
                                <div className='allSkills p-3'><img src={Node} alt="React" /><p className='text-sm text-center'>Node.js</p></div>
                                <div className='allSkills'><img src={Express} alt="" /><p className='text-sm text-center'>Express.js</p></div>
                                <div className='allSkills'><img src={Firebase} alt="Wordpress" /><p className='text-sm text-center'>Firebase</p></div>
                            </div>
                        </div >
                        <div className="skillsContainer">
                            <p className="skillsTitle">Databases</p>
                            <div className='flex flex-wrap justify-center gap-5 mt-8'>
                                <div className='allSkills'><img src={Mysql} alt="React" /><p className='text-sm text-center mt-5'>MySQL</p></div>
                                <div className='allSkills'><img src={Mongodb} alt="" /><p className='text-sm text-center'>MongoDb</p></div>
                            </div>
                        </div>
                        <div className="skillsContainer">
                             <p className="skillsTitle">Programming Languages</p>
                            <div className='flex flex-wrap justify-center gap-5 mt-8'>
                                <div className='allSkills p-3'><img src={c} alt="React" /><p className='text-sm mt-1 text-center'>c</p></div>
                                <div className='allSkills'><img src={java} alt="" /><p className='text-sm text-center'>Java</p></div>
                                <div className='allSkills pt-5'><img src={js} alt="Wordpress" /><p className='text-sm mt-4 text-center'>JavaScript</p></div>
                            </div>
                        </div>
                        <div className="skillsContainer">
                            <p className="skillsTitle">Tools & Version Control</p>
                            <div className='flex flex-wrap justify-center gap-5 mt-8'>
                                <div className='allSkills'><img src={git} alt="React" /><p className='text-sm text-center'>Git</p></div>
                                <div className='allSkills'><img src={github} alt="" /><p className='text-sm text-center'>GitHub</p></div>
                                <div className='allSkills'><img src={postman} alt="Wordpress" /><p className='text-sm text-center'>PostMan</p></div>
                                <div className='allSkills'><img src={vscode} alt="Figma" /><p className='text-sm text-center'>VS Code</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
