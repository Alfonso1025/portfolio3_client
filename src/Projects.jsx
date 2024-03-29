import React from "react"
import wpLogo from './media/WikerParkLogo.png'
import emLogo from './media/eveman1.png'
import wtLogo from './media/wikiTwit1.png'
import instLogo from './media/instagram1.png'
import graphLogo from './media/graph.png'
import linalgLogo from './media/algebra.png'
import ProjectCard from "./ProjectsCard"
import saavedra from './media/saavedra2.png'

function Projects(){

const projectsArray = [

    {
        name :'JoyHub',
        logo : emLogo,
        description : `A web app to plan your wedding. Create a guest list and let your guests RSVP easily. 
        Sign up now for stress-free wedding planning.`,
        stackArray : ['React.js', 'Node.js','PostgresSql', 'MidJourney', 'Canva', 'S3', 'EC2'],
        github : 'https://github.com/Alfonso1025/eventManager_client.git',
        liveProject : 'https://event-manager-client.vercel.app/'
    },
    {
        name :'Saavedra Law',
        logo : saavedra,
        description : `Saavedra Law is a leading firm specializing in civil litigation in 
        Mexico City. It was a privilege to be entrusted with the task of developing and 
        creating their official website, which served as a powerful platform to showcase 
        their expertise and services.`,
        stackArray : ['React.js', 'Midjourney', 'Canva', 'Css'],
        github : 'https://github.com/Alfonso1025/Ramirez-Saavedra',
        liveProject : 'https://ramirez-saavedra.vercel.app/'
    },
    {
        name :'Instagram Clone',
        logo : instLogo,
        description : `A personal project developed to showcase my skills and passion 
        for photo-sharing applications. Based on the functionalities and user experience 
        of Instagram, this app allows you to sign up, log in, upload a single or multiple images with
        each post, and interact with friends through likes and comments. Click the app icon 
        to see the API documentation, or go click the github icon for the client side code.`,
        stackArray : ['React Native', 'Typescrypt','Node.js','MongoDB', 'Expo Go', 'S3'],
        github : 'https://github.com/Alfonso1025/instagram_clone_client',
        liveProject : 'https://insta-app.alfonso-softtech.com/documentation'
    },

    {   
        name : 'Wiker Park Coop',
        logo : wpLogo,
        description : `Wikerpark is a Chicago-based app that allows parents to babysit for each 
        other for free, helping them save money on babysitters. The app has a points system and a background check to ensure safety and fairness. 
        This allows parents to go on dates without worrying about childcare costs`,
        stackArray : ['React.js', 'Node.js','MongoDb', 'MidJourney', 'Canva', 'S3', 'EC2'],
        github : "https://github.com/Alfonso1025/wikerpark-app-client.git",
        liveProject : "https://wikerpark-app-client.vercel.app/"
    },
   
  
    
    
    {   
        name : 'Graphs',
        logo :graphLogo, 
        description : ` Currently the 3rd iteration of a library that focuses on solving various graph 
        problems. Continuously refining it to optimize performance. `,
        stackArray : ['C++'],
        github : "https://github.com/Alfonso1025/Graphs/tree/master",
        liveProject : "https://github.com/Alfonso1025/Graphs/tree/master",
    },
  
    {
        name :'WikiTwitts',
        logo : wtLogo,
        description : `A personal web app project that streamlines 
        information about your favorite public figures. Search for a public 
        figure with a Wikipedia page and Twitter account. The app retrieves their bio and 
        latest tweet through the Wikipedia and Twitter APIs. Additionally, the public figure's 
        picture is retrieved via web scraping from the Wikipedia page and displayed 
        on an aesthetically pleasing card. Store these cards in your profile and stay 
        up-to-date on the latest from your favorite public figures. Try the icons below to 
        check the client and server side code for this app.`,
        stackArray : ['React Native', 'Typescrypt','Node.js','MongoDB', 'Expo Go', 'S3'],
        github : 'https://github.com/Alfonso1025/WikiProfiles_server',
        liveProject : 'https://github.com/Alfonso1025/wikiTwitts_client'
    },
   
    {   
        name : 'Lineal Algebra',
        logo : linalgLogo,
        description : ` The first iteration of a library for linear algebra that aims to takle and simplify 
        calculations involving vectors and matrices.  `,
        stackArray : ['C++'],
        github : "https://github.com/Alfonso1025/Lineal_Algebra",
        liveProject : "https://github.com/Alfonso1025/Lineal_Algebra"
    },
    {   
        name : 'Artificial Inteligence CSV file Analyst',
        logo : linalgLogo,
        description : `An AI-powered app that allows non technical professionals like lawyers or
         marketers. With this tool, you can easily upload your CSV data and simply ask it
         questions in natural language to get insights, making data analysis straightforward
         and accessible to everyone with minimal technical skills. `,
        stackArray : ['python, flask'],
        github : "https://github.com/Alfonso1025/AI_Dataset_Analyst",
        liveProject : "http://alfonso25.pythonanywhere.com/"
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