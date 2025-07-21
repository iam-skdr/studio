
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Lead AI Engineer',
    company: 'Innovate AI',
    period: '2020 - Present',
    description: 'Leading the development of cutting-edge AI solutions, focusing on natural language processing and computer vision. Driving project lifecycle from conception to deployment.',
    skills: ['AI/ML', 'Python', 'TensorFlow', 'Project Management'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Tech Solutions Inc.',
    period: '2018 - 2020',
    description: 'Developed and maintained scalable web applications for enterprise clients. Mentored junior developers and improved code quality across the team.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2016 - 2018',
    description: 'Built responsive and interactive user interfaces for various clients, enhancing user experience and engagement through modern web technologies.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js'],
  },
];

const TimelineItem = ({ experience, isLeft }: { experience: (typeof experiences)[0], isLeft: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn('flex justify-between items-center w-full', { 'flex-row-reverse': isLeft })}>
      <div className="w-5/12">
        <Card className={cn('glassmorphism transition-all duration-700 ease-out', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0', isLeft ? '-translate-x-8' : 'translate-x-8')}>
          <CardHeader>
            <CardTitle className="text-primary">{experience.role}</CardTitle>
            <CardDescription>{experience.company} | {experience.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="relative w-2/12 flex justify-center">
        <div className="h-full w-1 bg-border/50 absolute"></div>
        <div className={cn("z-10 bg-primary h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-background transition-transform duration-500", isVisible ? 'scale-100' : 'scale-0')}>
          <Briefcase className="text-primary-foreground" />
        </div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};


export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Experience</h2>
          <p className="text-lg text-muted-foreground mt-4">My professional journey and accomplishments.</p>
        </div>
        <div className="relative flex flex-col items-center gap-16">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
