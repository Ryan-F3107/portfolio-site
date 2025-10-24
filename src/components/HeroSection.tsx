import { ArrowBigDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Ryan</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Fernandes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Software Developer based in Mississauga, Canada. Started my journey in tech as a consultant within the SAP field and now I'm transitioning into Full-Stack development.
                        I enjoy working on big projects, collaborating with people while learning new technologies to contribute towards a common goal.
                    </p>
                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View my work
                        </a>
                    </div>
                </div>
            </div>
        <div className="absolute bottom-8 left-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce">
            <span>Scroll</span>
            <ArrowBigDown className="h-5 w-5 text-primary"/>
        </div>
        </section>);
}