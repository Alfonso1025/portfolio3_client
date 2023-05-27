import React from "react"
import './styles/About.css'
const aboutText = `Hi there! I'm Alfonso, a software developer from Chicago with expertise 
in front-end and back-end development, database management, 
version control, and deployment skills.
On the front-end, I'm proficient in javaScript vanilla as well as React.js and have 
experience developing mobile apps with React Native. In back-end development, I specialize in 
Node.js with Express.js.
Regarding databases, I have experience with both SQL and NoSQL databases, including PostgreSQL, 
MySQL, MongoDB, and prioritize data integrity and consistency.

I'm experienced in C and C++ and have developed several notable projects, including optimized 
libraries for graph algorithms and linear algebra problem-solving.
I'm well-versed in Git and GitHub for version control and have experience deploying apps 
to AWS and troubleshooting any issues that may arise.
Most recently, I have integrated promot engineering to enhance efficiency and scalability in 
every part of the development process.
I'm dedicated to writing clean code, adhering to best practices, and ensuring every project is 
efficient, scalable, and secure through testing and documentation. Thank you for considering my 
portfolio, and I look forward to the opportunity to collaborate with you!
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