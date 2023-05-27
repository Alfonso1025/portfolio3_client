import React from "react"
import wpLogo from './media/WikerParkLogo.png'
import './styles/Projects.css'
import { AiFillGithub } from 'react-icons/ai';
function ProjectCard(props){

const techStackArray = props.techStackArray
const projectLogo = props.projectLogo
const projectName = props.projectName
const description = props.description
const github = props.github
const liveProject = props.liveProject
return(
    
<div>

  <div className="card-project">
                     
    <div className="project-sidebar">
                       
        <ul className="project-stack">
            {
                techStackArray.map((item, index)=>{
                    return(
                        <>
                           <li>{item}</li>
                        </>
                    )
                    }
                 )
            }
        </ul>
    </div>

    <div className="project-main">
            <div className="project-main-header">
                <h2 className="project-name">{projectName}</h2>
                <img src={projectLogo} alt="logo" className="project-image" />
            </div>
            <h4>Web app</h4>
            <p className="project-body">{description}</p>
            <div className="project-buttons">
                <a className="prject-link" href={github}>
                    <AiFillGithub style={{fontSize: '30px', color:'#0B161A'}}/>
                </a>
                <a className="project-link" href={liveProject}>
                    <img src={projectLogo} alt="logo" className="project-link-live" />
                </a>
            </div>

    </div>
  </div>


</div>
    )
}

export default ProjectCard