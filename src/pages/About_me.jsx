import { useEffect } from 'react';

export default function AboutMe() {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
      
      .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
        color: black;
        font-family: 'Roboto', sans-serif;
        padding: 2rem;
      }

      .about-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
        font-family: 'Roboto', sans-serif;
      }

      .about-divider {
        width: 100%;
        border: 1px solid #718096;
        margin-bottom: 1rem;
      }

      .about-description {
        font-size: 1.25rem;
        line-height: 1.75rem;
        max-width: 800px;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
      }
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className='about-container'>
            <h1 className='about-title'>ABOUT ME</h1>
            <hr className='about-divider' />
            <p className='about-description'>
                Hey! I’m Layssa Gonzalez, a Junior Software Engineer. I’m
                passionate about technology and developing digital solutions.
                I’m always learning and exploring new tools and programming
                languages. I love taking on challenges and contributing to
                innovative projects that make a difference.
            </p>
        </div>
    );
}
