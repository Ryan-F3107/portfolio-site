import { Linkedin, Mail, Map, Phone } from "lucide-react"

export const ContactSection = () => {
    return(
        <section id="contact" className="py-24 px-4 relative-bg-secondary/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get in 
                <span className="text-primary">Touch!</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:ryanfernandes3107@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">ryanfernandes3107@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+13433636925" className="text-muted-foreground hover:text-primary transition-colors">+1 (343)363-6925</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Map className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">Mississauga, ON, Canada</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Connect on LinkedIn</h4>
                                <a 
                                href="https://www.linkedin.com/in/ryan-fernandes3107/" 
                                target="_blank" 
                                className="text-muted-foreground hover:text-primary transition-colors">LinkedIn(ryan-fernandes3107/)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}