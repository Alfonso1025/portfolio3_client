import React from "react"
import './styles/About.css'
const aboutText = `Hi there! I'm Alfonso, a software developer from Chicago. I specialize in 
both front-end and back-end development, possessing a diverse skill set that includes database
 management, version control, and deployment techniques.

In front-end development, I have a strong command of vanilla JavaScript, and the 
ability to build client side applications with React.js. On the back-end, my focus lies in Node.js with Express.js, 
enabling me to create robust server-side solutions.

My expertise extends to various databases, encompassing SQL and NoSQL technologies such as 
PostgreSQL, MySQL, and MongoDB. 

Moreover, I have a foundational understanding of C and C++, and I have gained valuable 
experience through my involvement in projects such as optimizing graph algorithms and 
solving linear algebra problems by developing specialized libraries. 

For version control, I am proficient in Git and GitHub, ensuring efficient code management 
and collaboration. Additionally, I possess hands-on experience deploying applications on AWS 
and resolving any encountered issues.

Recently, I have integrated prompt engineering into my workflow to enhance efficiency 
and speed at every stage of the development process, including the design of user interfaces. 

I am committed to writing clean code, adhering to best practices, and ensuring efficiency, scalability, and security 
through thorough testing and documentation.

Thank you for taking the time to reading this summary of my technical capabilities. I eagerly anticipate the 
opportunity to collaborate with you and contribute to your team's success!
`
function About(){

    return(
        <div className="about-wrapper">
            <p className="about-text">
                {aboutText}
            </p>
        </div>
    )
}

export default About