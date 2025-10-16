import { useEffect, useState } from "react";
import type { Star } from '../model/Star';
//Star property:
// id, size, x, y, opacity, animation duration
export const StarBackground =() => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        generateStars();
    },[])
    /* Stars generated based on size of windows */
    const generateStars = () => {
        const numberOfStars:number = Math.floor((window.innerHeight * window.innerWidth) / 1000 );

        const newStars:Star[] = [];

        for(let i=0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,//Math.random() - 0 to 1 range
                x: Math.random() * 100, // stars placed from 0 - 100% of the screen
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, //some stars faint /bright,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    } 
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
    </div>);
}