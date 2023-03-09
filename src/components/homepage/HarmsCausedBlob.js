import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from "@/styles/HarmsCausedBlob.module.css"

const HarmsCausedBlob = (props) => {
    const [hovered, setHovered] = React.useState(false);
    const paths = [
        'M 0,50 C 0,20 20,0 50,0 C 80,0 100,20 100,50 C 100,80 80,100 50,100 C 20,100 0,80 0,50 Z',
        'M 0,50 C 0,0 20,0 50,0 C 80,0 100,0 100,50 C 100,80 80,100 50,100 C 20,100 0,100 0,50 Z',
    ];

    const { d } = useSpring({
        from: { d: paths[0] },
        to: { d: hovered ? paths[1] : paths[0] }
    });

    return (
        <div className='relative'>
            <div 
                className={`flex justify-center items-center h-[80vh] md:h-[70vh] ${props.bg} relative`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <animated.svg
                    className="w-64 md:w-96 lg:w-128"
                    viewBox="0 0 100 100"
                >
                    <animated.path d={d} fill={props.color} />
                </animated.svg>
                <div className="absolute z-10 flex flex-col items-center justify-center text-center w-11/12 sm:w-3/4 md:w-1/2">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800 pb-6">
                        {props.heading}
                    </h2>
                    <p className="text-normal md:text-2xl text-gray-800">
                        {props.description}
                    </p>
                </div>
            </div>
            <div className={styles.customShapeDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className={props.fill}></path>
                </svg>
            </div>
        </div>
    );
};

export default HarmsCausedBlob;
