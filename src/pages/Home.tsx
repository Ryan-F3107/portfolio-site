/* import {AboutSection } from '../components/AboutSection.tsx'; */
import { HeroSection } from '../components/HeroSection.tsx';
import { NavBar } from '../components/NavBar.tsx';
import { StarBackground } from '../components/StarBackground.tsx';
import {ThemeToggle} from '../components/ThemeToggle.tsx';
import { ProjectsSection } from '../components/ProjectsSection.tsx';
import { ContactSection } from '../components/ContactSection.tsx';
import { Footer } from '../components/Footer.tsx';

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground">
            {/*Theme toggle */}
            <ThemeToggle/>
            {/* background effect - starBackground */}
            <StarBackground/>
            {/*Navbar - About, Projects, contact */}
            <NavBar/>
            {/*Main Content  */}
            <main>
                <HeroSection/>
                {/* <AboutSection/> */}
                <ProjectsSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    )
}
/* 
Footer 
*/