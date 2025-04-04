import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Calcular el desplazamiento en X y Y
const calc = (x, y) => [window.innerWidth / 2 - x, window.innerHeight / 2 - y];

// Transformar las coordenadas para animar la imagen
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Animacion = () => {
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
        <animated.div
            style={{
                backgroundImage: "url('/fondo.png')", // Ruta de la imagen
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
                position: 'absolute',
                top: 0,
                left: 0,
                transform: props.xy.to(trans), // Aplicar la transformación
                zIndex: -1, // Asegurarse de que la imagen esté detrás del contenido
                willChange: 'transform', // Mejora el rendimiento
                pointerEvents: 'none', // Evita que el div capture eventos del mouse
            }}
        />
    );
};

export default Animacion;
