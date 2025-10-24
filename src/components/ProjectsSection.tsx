import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "E2E Clothing store",
        description: "A clothing store similar to Uniqlo, created with React and hosted on Netlify",
        image:"/projects/Clothing_App.png",
        tags:["React","API integration","Git","Firebase"],
        demoUrl: "https://fluffy-cannoli-d7a273.netlify.app/",
        githubUrl:"https://github.com/Ryan-F3107/uniqlol-clothing/tree/main"
    },
    {
        id: 2,
        title: "Contact Search",
        description: "A friends contact list with search capabilities, created while learning about React",
        image:"/projects/RoboFriends.png",
        tags:["React","CSS","Git"],
        demoUrl: "https://ryan-f3107.github.io/RoboFriends/",
        githubUrl:"https://github.com/Ryan-F3107/RoboFriends"
    }
]
export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects done while learning about Full-Stack development
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground hover:text-primary transition-color duration-300" target="_blank">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground hover:text-primary transition-color duration-300" target="_blank">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Ryan-F3107" target="_blank">
                        Github Repo<Github size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}