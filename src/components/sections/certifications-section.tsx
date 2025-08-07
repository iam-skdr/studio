import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, School } from "lucide-react";

const certifications = [
    {
        name: "Data Science",
        issuer: "Coursera, IBM",
        type: "Professional Certification",
    },
    {
        name: "Google Analytics",
        issuer: "Skillshop, Google",
        type: "Professional Certification",
    },
    {
        name: "Generative AI",
        issuer: "Skillshop, Google",
        type: "Professional Certification",
    },
    {
        name: "Deep Learning",
        issuer: "Coursera",
        type: "Course Certification",
    },
    {
        name: "Cloud Computing",
        issuer: "Cloud Skill Boost, Google",
        type: "Course Certification",
    },
    {
        name: "Front-End Design",
        issuer: "Udemy",
        type: "Professional Certification",
    },
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-headline">Certifications</h2>
                    <p className="text-lg text-muted-foreground mt-4">My professional certifications and qualifications.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <Card key={index} className="glassmorphism flex flex-col h-full">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Award className="h-10 w-10 text-primary"/>
                                <div>
                                    <CardTitle className="text-primary">{cert.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{cert.issuer}</p>
                                <Badge variant="secondary" className="mt-2">{cert.type}</Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
