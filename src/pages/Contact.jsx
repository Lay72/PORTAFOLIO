import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
            
            .contact-container {
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

            .contact-title {
                font-size: 3rem;
                font-weight: bold;
                margin-bottom: 1rem;
                font-family: 'Roboto', sans-serif;
            }

            .contact-divider {
                width: 100%;
                border: 1px solid #718096;
                margin-bottom: 1rem;
            }

            .contact-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 1rem;
            }

            .contact-section span {
                font-size: 1.25rem;
                line-height: 1.75rem;
                margin-bottom: 0.5rem;
                font-family: 'Roboto', sans-serif;
            }

            .contact-section .section-title {
                font-weight: bold;
            }

            .contact-section .section-content {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .contact-section .section-content a {
                text-decoration: none;
                color: black;
            }

            .contact-section .section-content span {
                margin-left: 0.5rem;
            }

            @media (min-width: 768px) {
                .contact-section {
                    flex-direction: row;
                    justify-content: center;
                    width: 100%;
                }

                .contact-section .section-content {
                    margin-left: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className='contact-container'>
            <h1 className='contact-title'>CONTACT</h1>
            <hr className='contact-divider' />
            <div className='contact-section'>
                <div className='section-content'>
                    <span className='section-title'>GIT HUB</span>
                    <a
                        href='https://github.com/Lay72'
                        target='_blank'
                        rel='noopener noreferrer'>
                        ↗ Lay72
                    </a>
                </div>
                <div className='section-content'>
                    <span className='section-title'>SOCIAL MEDIAS</span>
                    <div className='flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0'>
                        <a
                            href='https://mail.google.com/mail/u/0/?hl=es-419#inbox'
                            target='_blank'
                            rel='noopener noreferrer'>
                            ↗ mail
                        </a>
                        <a
                            href='https://www.linkedin.com/in/layssa-gonzalez-guerra-583674327/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            ↗ linked in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
