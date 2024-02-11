import React, { useEffect, useRef} from 'react';
import { motion , useInView , useAnimation } from 'framer-motion';
 
export const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const slideControls = useAnimation();
    const mainControls = useAnimation();

    useEffect(() => {{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
        
    }}, [isInView]);

    return(
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 80},
                    visible: { opacity: 1, y: 0},
                }}
                initial= "hidden"
                animate= {mainControls}
                whileInView={"visible"}
                transition={{ duration: 0.5}}
            >
                {children}  
            </motion.div>
        </div>
    );


}
export const RevealLeft = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const slideControls = useAnimation();
    const mainControls = useAnimation();

    useEffect(() => {{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
        
    }}, [isInView]);

    return(
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 80},
                    visible: { opacity: 1, x: 0},
                }}
                initial= "hidden"
                animate= {mainControls}
                whileInView={"visible"}
                transition={{ duration: 0.5}}
            >
                {children}  
            </motion.div>
        </div>
    );


}

export const RevealRight = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const slideControls = useAnimation();
    const mainControls = useAnimation();

    useEffect(() => {{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
        
    }}, [isInView]);

    return(
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -80},
                    visible: { opacity: 1, x: 0},
                }}
                initial= "hidden"
                animate= {mainControls}
                whileInView={"visible"}
                transition={{ duration: 0.5}}
            >
                {children}  
            </motion.div>
        </div>
    );


}

