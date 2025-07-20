import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Content Generator',
    description: 'A web platform that uses LLMs to generate marketing copy, blog posts, and social media updates.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'GenAI', 'Stripe', 'Vercel'],
    link: '#',
    aiHint: 'abstract tech'
  },
  {
    title: 'Interactive Data Visualization Dashboard',
    description: 'A real-time analytics dashboard for a fintech startup, featuring complex data visualizations and user-friendly controls.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    link: '#',
    aiHint: 'data chart'
  },
  {
    title: 'E-commerce Scalability Solution',
    description: 'Re-architected a major e-commerce platform to handle 10x traffic increase using microservices and cloud-native tech.',
    image: 'https://placehold.co/600x400.png',
    tags: ['AWS', 'Kubernetes', 'Go', 'PostgreSQL'],
    link: '#',
    aiHint: 'online shopping'
  },
  {
    title: 'Mobile Health & Wellness App',
    description: 'A cross-platform mobile app for tracking fitness goals and providing personalized workout plans.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    link: '#',
    aiHint: 'fitness app'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Project Showcase</h2>
          <p className="text-lg text-muted-foreground mt-4">A selection of projects that demonstrate my skills and creativity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="group block rounded-xl overflow-hidden">
              <Card className="glassmorphism h-full transition-all duration-300 ease-in-out group-hover:bg-card/80 group-hover:scale-[1.02] group-hover:shadow-primary/20 group-hover:shadow-2xl">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    data-ai-hint={project.aiHint}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-accent group-hover:underline">
                    View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
