import  { easeInOut, motion } from 'framer-motion';

// variants
const StairAnimation = {
    initial: { 
    top: "0%",
    
    },
    animate: { 
    top: "100%",
    
    },
    exit: { 
    top: ["100%","0%"],
    
    },
}
// calcular o atraso escalonado do índice reverso
const reverseIndex = (index) => {
    const totalSteps = 6; // número total de degraus nas escadas
    return totalSteps - index - 1; 
}

const Stairs = () => {
    return (
        <>
        {/* renderizar 6 divs de movimento, cada um representando um degrau da escada (Stairs)
        Cada div terá alguma animação definida pelo objeto StairAnimation.
        o atraso para cada div é calculado dinamicamente com base em seu índice de reserva,
        criando um efeito escalonado com atraso decrescente para cada etapa subsequente.
        */}
        {[...Array(6)].map((_, index) => (
            <motion.div
                key={index}
                variants={StairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ 
                    duration: 0.4,
                    ease:easeInOut,
                    delay: reverseIndex(index) * 0.1 
                }}
                className="h-full w-full bg-white relative"
            />
        ))}
        </>
    );
};
export default Stairs;