import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import fondo from '../assets/fondo.png';

// Calcular el desplazamiento en X y Y
const calc = (x, y) => [window.innerWidth / 2 - x, window.innerHeight / 2 - y];

// Transformar las coordenadas para animar la imagen
const trans = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0) scale(1.2)`;

const Animacion = ({ children }) => {
    // Usar useSpring para animar el movimiento
    const [props, set] = useSpring(() => ({
        xy: [0, 0], // Estado inicial
        config: { mass: 10, tension: 550, friction: 140 },
    }));

    useEffect(() => {
        const handleMouseMove = (e) => {
            set({ xy: calc(e.clientX, e.clientY) }); // Actualiza el estado con las nuevas coordenadas
        };

        // Escuchar el evento de movimiento del mouse
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove); // Limpieza del evento
        };
    }, [set]);

    return (
        <div className='wave-container'>
            <animated.img
                className='wave'
                src={fondo}
                style={{
                    transform: props.xy.to(trans), // Aplicar la transformación
                }}
            />
            {children}
        </div>
    );
};

export default Animacion;
