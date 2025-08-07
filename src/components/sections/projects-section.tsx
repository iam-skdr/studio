import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'CS Agent: A PPT Generation Tool',
    description: 'Engineered an AI agent to automatically generate new PowerPoint presentations by extracting and repurposing content from existing files. The system uses LangChain and Azure OpenAI Assistants to produce structured JSON content, which is then parsed by a custom Python script to create professionally formatted presentations.',
    image: 'https://placehold.co/600x400.png',
    tags: ['LangChain', 'Azure OpenAI', 'Python'],
    link: '#',
    aiHint: 'ai presentation'
  },
  {
    title: 'Self-Healing Test Analysis Tool',
    description: 'Developed a full-stack tool to enhance CI/CD testing processes. The system analyzes test reports from GitHub Actions, uses LLMs to identify and attempt to self-heal failed scripts, and logs detailed failure analysis in a PostgreSQL database.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'PostgreSQL', 'Python', 'LLMs', 'GitHub Actions', 'Jira'],
    link: '#',
    aiHint: 'ci-cd pipeline'
  },
  {
    title: 'Test Coverage Agent',
    description: 'Created an intelligent agent to assess the coverage of test cases against user stories. This tool utilizes LangChain and Azure OpenAI to identify gaps and automatically generate new test cases, ensuring comprehensive software testing.',
    image: 'https://placehold.co/600x400.png',
    tags: ['LangChain', 'Azure OpenAI', 'React'],
    link: '#',
    aiHint: 'software testing'
  },
  {
    title: 'Sign Language Interpreter',
    description: 'Engineered a real-time sign language interpreter to bridge communication gaps for the hearing-impaired. This project utilizes a Deep Convolutional Neural Network (CNN) to accurately classify and translate sign language gestures from a live video feed.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'TensorFlow/PyTorch', 'OpenCV', 'Deep Learning'],
    link: '#',
    aiHint: 'sign language'
  },
  {
    title: 'Virtual Assistance for Visually Impaired',
    description: 'Developed a virtual assistant to enhance the independence of visually impaired individuals. The application uses a live video stream to perform real-time object detection and scene analysis, converting visual insights into clear, spoken descriptions.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'OpenCV', 'YOLO/SSD', 'gTTS'],
    link: '#',
    aiHint: 'visual assistance'
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
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-primary group-hover:underline">
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
