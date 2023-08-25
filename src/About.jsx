import React from "react"
import './styles/About.css'

const aboutJson = [
    {
        title : 'Front end',
        text : `I have a strong knowledge of CSS and vanilla JavaScript, as well as the 
                ability to build client side applications with React.js. The above mentioned skills allow me
                to build complex interfaces designed by the UX and UI  teams`,
    },
    {
        title : 'Back end',
        text : `On the back-end, my expertise lies in Node.js with Express.js, enabling me to create robust 
        server-side solution. For the design phase of my server side apps, I like using tools like UML class diagrams and C4 diagrams. 
        I have experience using Super Test to test my APIs and Swagger for writting documentation. `
    },
    {
        title: 'Database management',
        text : `My expertise extends to various databases, encompassing relational and no realtional technologies such as 
                PostgreSQL, MySQL, and MongoDB. I am very proficient both in SQL as well as the Mongo query language `
    },
    
    {
        title : 'Deployment',
        text: `I have experience deploying applications using  Amazon Web Services. In particular, services such as 
               Ec2, S3 Bucket, RDS among others. In addition, I have used NGINX as a reverse proxy
               to direct traffic to my back end services hosted in Linux distributions. `
    },
    {
        title : 'Testing',
        text :`I have used the library Jest to write unit testing for my Javascript code. 
              Additionally, Supertest has proven to be my go-to tool for conducting thorough API testing`
    },
    {
        title : 'Mobile development',
        text : `For mobile development, I have worked with React Native in combination with Typescript to build 
        applications for andriod.`
    },
    {
        title : 'The C programming language',
        text : `C has a special place in my heart. It was my first programming language, and it remains my 
        favorite one. I like it because it encourages me to think in fairly low level and undestand a bit mora
        what happens under the hood. I feel a big deal of satisfaction and joy when I programm in C. 
        relying on high-level features. I still use C when tackling algorithmic problems and for hobby projects 
        on embedded systems.`
    },
    {
        title :  'Python',
        text : 'I have employed Python for a variety of tasks, ranging from crafting Back End applications using the Django framework to tackling algorithmic challenges and working on hobby projects in data analitics and machine learning'
    },
    {
        title : 'Version control',
        text : `For version control, I am proficient in Git and GitHub.`
    },
]

const intro = ` Thank you for visiting my portfolio. As a software developer based in Sydney, I follow industry 
                best practices. Scalability, security, rigorous testing, and detailed documentation are the 
                foundations of my development approach. Let me show you some of the areas where I have gained
                 expertise over years of practice `

               
function About(){

    return(
        <div className="about-main-container">
            <div className="about-intro">
                <p className="about-text">{intro}</p>
            </div>
      
            <div className="about-cards-wrapper">
           
            {
                aboutJson.map((point, index)=>{
                    return(
                        <div key={index} className="about-card">
                            <div className="about-content">
                                <h3>{point.title}</h3>
                                 <p className="about-text">{point.text}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default About