import { NavBar } from '../components/NavBar.tsx';
import { StarBackground } from '../components/StarBackground.tsx';
import {ThemeToggle} from '../components/ThemeToggle.tsx';
export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground">
            {/*Theme toggle */}
            <ThemeToggle/>
            {/* background effect - starBackground */}
            <StarBackground/>
            {/*Navbar - About, Projects, contact */}
            <NavBar/>
        </div>
    )
}
/* 
Remaining Components
Main section
Footer 
*/