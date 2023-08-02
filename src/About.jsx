import React from "react"
import './styles/About.css'

const aboutJson = [
    {
        title : 'Front end',
        text : `In front-end development, I have a strong knowledge of CSS and vanilla JavaScript, as well as the 
                ability to build client side applications with React.js.`,
    },
    {
        title : 'Back end',
        text : `On the back-end, my focus lies in Node.js with Express.js, enabling me to create robust server-side 
        solutions. I like combining UML class diagrams and C4 diagrams to design my backend systems. I use Supertest 
        for testing my APIs and choose Swagger for documentation.. 
                
                
        `
    },
    {
        title: 'Database management',
        text : `My expertise extends to various databases, encompassing SQL and NoSQL technologies such as 
                PostgreSQL, MySQL, and MongoDB. `
    },
    {
        title : 'Version control',
        text : `For version control, I am proficient in Git and GitHub.`
    },
    {
        title : 'Deployment',
        text: `I have exprience deploying applications using  Amazon Cloud Services. In particular, services such as 
               Ec2, S3 Bucket RDS among others. `
    },
    {
        title : 'Testing',
        text :`I have used the library Jest to write unit testing for my Javascript code. 
        Additionally, Supertest has proven to be my go-to tool for conducting thorough API testing`
    },
    {
        title : 'Mobile development',
        text : `For mobile development, I have had the chance to work with React native and Typescript to build 
        applications for andriod.`
    },
    {
        title : 'The C programming language',
        text : `C has a special place in my heart. It was my first programming language, and it remains my 
        favorite one. I like it because it encourages me to think and build things from scratch, rather than 
        relying on high-level features. I still use C when tackling algorithmic problems and for hobby projects 
        on embedded systems.`
    }
]

const intro = ` Thank you for visiting my portfolio. As a a software developer based on Sydney,
                I am passionate about  following industry best practices, and prioritizing efficiency, scalability, 
                and security when developing software. Rigorous testing and detailed documentation are the foundation of my 
                development approach. Let me show you some of the areas where i have gained expertise over years of practice `
const aboutText = `Hi there! I'm Alfonso, a software developer. I have experience in both 
 front-end and back-end development, possessing a diverse skill set that goes from UI, UX to database
 management, version control, and deployment techniques.

Front end development

In front-end development, I have a strong knowledge of vanilla JavaScript, and the 
ability to build client side applications with React.js. 

Back end development 

On the back-end, my focus lies in Node.js with Express.js, enabling me to create robust server-side solutions.
My expertise extends to various databases, encompassing SQL and NoSQL technologies such as 
PostgreSQL, MySQL, and MongoDB. 

Moreover, I have a foundational understanding of C and C++, and I have gained valuable 
experience through my involvement in projects such as optimizing graph algorithms and 
solving linear algebra problems by developing specialized libraries. 

Version Control

For version control, I am proficient in Git and GitHub. Additionally, I possess hands-on experience deploying applications on AWS 
and resolving any encountered issues.

Recently, I have integrated the use of Large Language Models and other forms of generative Artificial
intelligence into my workflow to enhance efficiency and speed at every stage of the development process, including the design of user interfaces. 

I am committed to writing clean code, adhering to best practices, and ensuring efficiency, scalability, and security 
through thorough testing and documentation.

Finally, let me thank you for taking some time out of you bussy day to to read this summary 
of my technical capabilities. 
`
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