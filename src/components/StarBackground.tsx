import { useEffect, useState } from "react";
import type { Star } from '../model/Star';
import type { Meteors } from "../model/Meteors";
//Star property:
// id, size, x, y, opacity, animation duration
export const StarBackground =() => {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteors[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);
        //once resized, we remove the event listener to avoid any memory leaks
        return() => window.removeEventListener("resize",handleResize);
    },[]);
    /* Stars generated based on size of windows */
    const generateStars = () => {
        const numberOfStars:number = Math.floor((window.innerHeight * window.innerWidth) / 10000 );

        const newStars:Star[] = [];

        for(let i=0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,//Math.random() - 0 to 1 range =>size - 1 - 4
                x: Math.random() * 100, // stars placed from 0 - 100% of the screen
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, //some stars faint /bright,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    }
    
    const generateMeteors = () => {
        const numberOfMeteors = 2;
        const newMeteors:Meteors[] = [];
        for(let i=0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100, 
                y: Math.random() * 20,
                delay: Math.random() * 15, 
                animationDuration: Math.random() * 3 + 3
            });
        }
        setMeteors(newMeteors);
    };

    return(
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle" 
                style={{
                    width:star.size + "px",
                    height:star.size + "px",
                    left:star.x + "%",
                    top:star.y + "%",
                    opacity:star.opacity,
                    animationDuration:star.animationDuration + "s",
            }}/>
            ))}
        {meteors.map((meteor) => (
            <div 
                key={meteor.id} 
                className="meteor animate-meteor" 
                style={{
                    width:meteor.size * 40 + "px",
                    height:meteor.size*2 + "px",
                    left:meteor.x + "%",
                    top:meteor.y + "%",
                    animationDelay:`${meteor.delay}`,
                    animationDuration:meteor.animationDuration + "s",
            }}/>
            ))}
    </div>);
}