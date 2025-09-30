import React, { useState } from 'react';
import './styles.css';

import javaLogo from './assest/java.png';
import htmlLogo from './assest/html.png';
import cssLogo from './assest/css.png';
import postmanLogo from './assest/postman.png';
import trustifyImage from './assest/trustify.png';
import chatbotImage from './assest/chatbot.png';
import emailverifyImage from './assest/emailverify.png';
import n8nLogo from './assest/n8n.png';
import mongodbLogo from './assest/mongodb.png';
import sqlLogo from './assest/sql.png';
import linkedinLogo from './assest/linkedin.png';

// Public basketball image URL
const basketballUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png';

const NUM_BASKETBALLS = 1; // Number of basketballs

const App = () => {
  // State array for each basketball's bounce class
  const [bounceStates, setBounceStates] = useState(
    new Array(NUM_BASKETBALLS).fill('bounce')
  );

  // Handle bounce animation on click per ball
  const handleBounce = (index) => {
    setBounceStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = 'bounce-high';
      return newStates;
    });

    // Reset bounce class after high bounce animation duration
    setTimeout(() => {
      setBounceStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = 'bounce';
        return newStates;
      });
    }, 3170); // Match this duration with your CSS animation
  };

  return (
    <>
      {/* Multiple bouncing basketballs */}
      {bounceStates.map((bounceClass, i) => (
        <img
          key={i}
          src={basketballUrl}
          alt="Basketball"
          className={`basketball ${bounceClass}`}
          onClick={() => handleBounce(i)}
          draggable={false}
          style={{ left: 80 + i * 80 }} // space balls horizontally
        />
      ))}

      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <div className="orbs">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="orb" />
        ))}
      </div>

      {/* Main Content */}
      <main className="container">
        <header>
          <h1 className="name">Hansaja Bandara</h1>
          <p className="position">Software Engineer</p>
        </header>

        <section>
          <h2>About Me</h2>
          <div className="glass-section">
            <p>
              I'm a passionate and dedicated software engineer with a strong interest in building clean,
              scalable, and efficient software solutions. I specialize in full-stack web development,
              working with modern technologies such as React, Node.js, Express, and MongoDB.
              I enjoy transforming complex problems into intuitive, user-friendly applications.
              With a solid understanding of both frontend and backend development, I focus on writing
              maintainable code and delivering high-quality projects. I’m always eager to learn new
              tools and stay updated with the latest industry trends.
            </p>
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card"><img src={htmlLogo} alt="HTML" /><span>HTML</span></div>
            <div className="skill-card"><img src={cssLogo} alt="CSS" /><span>CSS</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/javascript/FFFF00" alt="JavaScript" /><span>JavaScript</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" /><span>TypeScript</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" /><span>React</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" /><span>Node.js</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" /><span>Python</span></div>
            <div className="skill-card"><img src={javaLogo} alt="Java" /><span>Java</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/django/092E20" alt="Django" /><span>Django</span></div>
            <div className="skill-card"><img src={n8nLogo} alt="n8n" /><span>n8n</span></div>
            <div className="skill-card"><img src={mongodbLogo} alt="MongoDB" /><span>MongoDB</span></div>
            <div className="skill-card"><img src={sqlLogo} alt="SQL" /><span>SQL</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/git/F05032" alt="Git" /><span>Git</span></div>
            <div className="skill-card"><img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" /><span>GitHub</span></div>
            <div className="skill-card"><img src={postmanLogo} alt="Postman" /><span>Postman</span></div>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src={trustifyImage} alt="Trustify" className="project-image" />
              <h3 className="project-title">Trustify</h3>
              <p className="project-description">
                A Digital Identity Verification Platform Created Using Blockchain Technology.
              </p>
            </div>

            <div className="project-card">
              <img src={chatbotImage} alt="AI Chatbot" className="project-image2" />
              <h3 className="project-title">AI Chatbot</h3>
              <p className="project-description">
                AI chatbot for Shopify stores using n8n, OpenAI, and Google Sheets.
              </p>
            </div>

            <div className="project-card">
              <img src={emailverifyImage} alt="Email Automation Tool" className="project-image3" />
              <h3 className="project-title">Email Automation Tool</h3>
              <p className="project-description">
                Cold email workflow builder with Storeleads & Hunter APIs using n8n.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact</h2>
          <div className="contacts-grid">
            <div className="glass-section contact-card">
              <div className="contact-icon-title">
                <img
                  src="https://cdn.simpleicons.org/gmail/EA4335"
                  alt="Email"
                  className="contact-icon"
                />
                <strong>Email</strong>
              </div>
              <p><a href="mailto:hbandara807@gmail.com">hbandara807@gmail.com</a></p>
            </div>

            <div className="glass-section contact-card">
              <div className="contact-icon-title">
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="contact-icon"
                />
                <strong>LinkedIn</strong>
              </div>
              <p>
                <a href="https://www.linkedin.com/in/hansaja-bandara-423b56295/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/hansaja-bandara
                </a>
              </p>
            </div>

            <div className="glass-section contact-card">
              <div className="contact-icon-title">
                <img
                  src="https://cdn.simpleicons.org/github/FFFFFF"
                  alt="GitHub"
                  className="contact-icon"
                />
                <strong>GitHub</strong>
              </div>
              <p>
                <a href="https://github.com/hansajabandara" target="_blank" rel="noopener noreferrer">
                  github.com/hansajabandara
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
