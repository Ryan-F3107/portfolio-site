import { FileUser } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">FullStack Software Developer</h3>
                        <p className="text-muted-foreground">
                            Queen's Uni Alumni with a degree in Computing, specialized in Software Design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact Info
                            </a>
                            <a href="https://drive.google.com/file/d/15yJDJSNWe-Bop-R4L9gldLCZoo5687__/view?usp=sharing" target="_blank" className="px-2 py-2 rounded-full border border-primary ">
                                <FileUser />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">

                        </div>
                        <div className="gradient-border p-6 card-hover">

                        </div>
                        <div className="gradient-border p-6 card-hover">

                        </div>
                    </div>
                </div>
            </div>
        </section>)
};