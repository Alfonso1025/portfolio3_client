import React from "react"
import wpLogo from './media/WikerParkLogo.png'
import emLogo from './media/eveman1.png'
import wtLogo from './media/wikiTwit1.png'
import instLogo from './media/instagram1.png'
import graphLogo from './media/graph.png'
import linalgLogo from './media/algebra.png'
import ProjectCard from "./ProjectsCard"

function Projects(){

const projectsArray = [

    {   
        name : 'Lineal Algebra',
        logo : linalgLogo,
        description : ` The first iteration of a library for linear algebra that simplifies calculations
         calculations involving vectors and matrices.  `,
        stackArray : ['C++'],
        github : "https://github.com/Alfonso1025/Lineal_Algebra",
        liveProject : "https://github.com/Alfonso1025/Lineal_Algebra"
    },
    {   
        name : 'Graphs',
        logo :graphLogo, 
        description : ` Currently the 3rd iteration of a library that focuses on solving various graph 
        problems. Continuously refining it to optimize performance. `,
        stackArray : ['C++'],
        github : "https://https://github.com/Alfonso1025/Graphs",
        liveProject : "https://https://github.com/Alfonso1025/Graphs",
    },

    {   
        name : 'Wiker Park Coop',
        logo : wpLogo,
        description : `Wikerpark is a Chicago-based app that allows parents to babysit for each 
        other for free, helping them save money on babysitters. The app has a points system and a background check to ensure safety and fairness. 
        This allows parents to go on dates without worrying about childcare costs`,
        stackArray : ['React.js', 'Node.js','MongoDb', 'MidJourney', 'Canva', 'S3', 'EC2'],
        github : "https://github.com/Alfonso1025/wikerpark-app-client.git",
        liveProject : "https://github.com/Alfonso1025/wikerpark_babysiting_server"
    },
    {
        name :'Event Manager',
        logo : emLogo,
        description : `A web app to plan your wedding. Create a guest list and let your guests RSVP easily. 
        Sign up now for stress-free wedding planning.`,
        stackArray : ['React.js', 'Node.js','PostgresSql', 'MidJourney', 'Canva', 'S3', 'EC2'],
        github : 'https://github.com/Alfonso1025/eventManager_client.git',
        liveProject : 'https://github.com/Alfonso1025/eventManagerServer2'
    },
    {
        name :'Instagram Clone',
        logo : instLogo,
        description : `A personal project developed to showcase my skills and passion 
        for photo-sharing applications. Based on the functionalities and user experience 
        of Instagram, this app allows you to sign up, log in, upload a single or multiple images with
        each post, and interact with friends through likes and comments.`,
        stackArray : ['React Native', 'Typescrypt','Node.js','MongoDB', 'Expo Go', 'S3'],
        github : 'https://github.com/Alfonso1025/instagram_clone_client',
        liveProject : 'https://insta-app.alfonso-softtech.com'
    },
    {
        name :'WikiTwitts',
        logo : wtLogo,
        description : `a personal web app project that streamlines 
        information about your favorite public figures. Search for a public 
        figure with a Wikipedia page and Twitter account and retrieve their bio and 
        latest tweet through the Wikipedia qand Twitter APIs. Additionally, the public figure's 
        picture is retrieved via web scraping from the Wikipedia page and displayed 
        on an aesthetically pleasing card. Store these cards in your profile and stay 
        up-to-date on the latest from your favorite public figures. Try wikiTwitts`,
        stackArray : ['React Native', 'Typescrypt','Node.js','MongoDB', 'Expo Go', 'S3'],
        github : 'https://github.com/Alfonso1025/WikiProfiles_server',
        liveProject : 'https://github.com/Alfonso1025/WikiProfiles_server'
    },


]


    return(
        <>
            {
                projectsArray.map((proj, index)=>{
                    return(
                        <ProjectCard techStackArray={proj.stackArray} 
                        projectLogo={proj.logo} 
                        projectName={proj.name} 
                        description = {proj.description}
                        github={proj.github}
                        liveProject={proj.liveProject}/>
                    )
                   


                })
            }
            
          
            
        </>
    )
}

export default Projects