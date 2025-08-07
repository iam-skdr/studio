
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'AI Research Intern',
    company: 'Change Management Enterprise',
    period: 'Apr 2024 – May 2024',
    description: 'Researched and prototyped NLP and AI solutions for education, assessing their impact on teaching methods.',
    skills: ['AI/ML', 'NLP', 'Prototyping'],
  },
  {
    role: 'Research Intern',
    company: 'Compsoft Technologies',
    period: 'Aug 2023 – Oct 2023',
    description: 'Completed a project on "Voice Assistance for Visually Impaired" using advanced voice recognition and natural language processing technologies to create a user-friendly solution.',
    skills: ['Voice Recognition', 'NLP', 'Computer Vision'],
  },
  {
    role: 'Exclusive Paid Intern',
    company: 'Sookshmas E-learning',
    period: 'Aug 2022 – Oct 2023',
    description: 'Developed a full e-commerce website, mentored over 200 students in project implementation, and served as Head Editor and Content Creator for the "SBK CS GEEKS" YouTube channel.',
    skills: ['E-commerce', 'Mentorship', 'Content Creation', 'Video Editing'],
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
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Work Experience</h2>
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
