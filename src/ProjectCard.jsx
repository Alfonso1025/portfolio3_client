import React from "react"
function ProjectCard(props){

const techStackArray = props.techStackArray
const projectLogo = props.projectLogo
const projectName = props.projectName
const description = props.description
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
                <img src={projectLogo} alt="logo" />
            </div>
            <h4>Web app</h4>
            <p className="project-body">{description}</p>
            <div className="project-button">
                    <input className="view-details-button" type="submit" value="view-details"/>
            </div>

    </div>
  </div>


</div>
    )
}

export default ProjectCard