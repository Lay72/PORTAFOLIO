import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
      
      .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
        color: black;
        font-family: 'Roboto', sans-serif;
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: 2px;
        font-family: 'Roboto', sans-serif;
      }

      .subtitle {
        font-size: 2rem;
        font-weight: bold;
        margin-top: 0.5rem;
        font-family: 'Roboto', sans-serif;
      }

      .highlight {
        color: #0056b3;
        text-decoration: underline;
      }

      .wave {
        color: #0056b3;
        display: inline-block;
        animation: wave-animation 2s infinite ease-in-out;
      }

      @keyframes wave-animation {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      .description {
        font-size: 1.2rem;
        margin: 1rem 0;
        opacity: 0.8;
      }

      .buttons {
        display: flex;
        gap: 2rem;
        margin-top: 1.5rem;
      }

      .btn {
        text-decoration: none;
        color: #0056b3;
        font-size: 1rem;
        transition: color 0.3s ease-in-out;
      }

      .btn:hover {
        color: black;
      }
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className='home-container'>
            <h1 className='title'>
                HEY, I'M <span className='highlight'>LAYSSA GUERRA</span>
            </h1>
            <h2 className='subtitle'>
                <span className='wave'>THIS IS MY PROFILE</span>
            </h2>
            <p className='description'>I'm a Junior Software Engineer</p>
            <div className='buttons'>
                <a href='/projects' className='btn'>
                    → see my projects
                </a>
                <a href='/about_me' className='btn'>
                    → more about me
                </a>
            </div>
        </div>
    );
}
