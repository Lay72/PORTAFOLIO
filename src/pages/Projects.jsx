import { useEffect } from 'react';

export default function Work() {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
      
      body {
        background-image: url('/fondo.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
      }

      .work-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        color: #000;
        padding: 3rem 2rem;
      }

      @media (min-width: 1024px) {
        .work-container {
          flex-direction: row;
          justify-content: center;
          gap: 4rem;
        }
      }

      .work-image {
        width: 100%;
        max-width: 500px;
        border-radius: 1rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        margin-bottom: 2rem;
      }

      @media (min-width: 1024px) {
        .work-image {
          margin-bottom: 0;
        }
      }

      .work-content {
        max-width: 600px;
        text-align: center;
      }

      @media (min-width: 1024px) {
        .work-content {
          text-align: left;
        }
      }

      .work-title {
        font-size: 3rem;
        font-weight: 400; /* Se elimina la negrita */
        margin-bottom: 0.5rem;
      }

      .work-list {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        width: 100%;
      }

      .work-item {
        padding: 1rem 1.5rem;
        border-radius: 0.8rem;
        font-size: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border: 1px solid #007bff;
        transition: transform 0.3s ease;
        font-weight: 400;
        color: #007bff; /* Color azul */
        text-decoration: none;
        cursor: pointer;
      }

      .work-item:hover {
        transform: scale(1.03);
        border: 2px solid #0056b3; /* Sombra en el borde */
      }

      .icon {
        margin-right: 0.6rem;
      }

      @media (min-width: 1024px) {
        .work-title {
          font-size: 3.5rem;
        }

        .work-item {
          font-size: 1.6rem;
        }
      }
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className='work-container'>
            <img
                src='https://th.bing.com/th/id/R.0f729d42893f94efd899f22311a3f769?rik=XT6dbMyzvmYP6w&riu=http%3a%2f%2felearningmasters.galileo.edu%2fwp-content%2fuploads%2f2016%2f12%2fPor-qu%c3%a9-utilizar-portafolios-digitales-como-herramienta-did%c3%a1ctica-1024x513.png&ehk=jK9sSSw0L64VQGlfU6%2bXpz0RaLoamoS1sE3boLOsp7k%3d&risl=&pid=ImgRaw&r=0'
                alt='Imagen de portafolio'
                className='work-image'
            />
            <div className='work-content'>
                <h1 className='work-title'>PROJECTS</h1>

                <div className='work-list'>
                    <a
                        href='https://github.com/Lay72/RICK-MORTY.git'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='work-item'>
                        <span>R_M</span>
                        <span>API</span>
                    </a>
                    <a
                        href='https://github.com/Lay72/FORMS-CLONE.git'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='work-item'>
                        <span>FORMS CLONE</span>
                        <span>HTML</span>
                    </a>
                    <a
                        href='https://github.com/Lay72/PATHFINDER.git'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='work-item'>
                        <span>
                            <i className='fas fa-arrow-right icon'></i>
                            PATHFINDER
                        </span>
                        <span>REACT</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
