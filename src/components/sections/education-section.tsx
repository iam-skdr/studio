import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Education</h2>
          <p className="text-lg text-muted-foreground mt-4">My academic background.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="glassmorphism">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <School className="h-8 w-8 text-primary"/>
                </div>
                <div>
                    <CardTitle>Bachelor of Engineering in Artificial Intelligence & Machine Learning</CardTitle>
                    <CardDescription>GMIT, Davangere (Nov 2020 – May 2024)</CardDescription>
                </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
