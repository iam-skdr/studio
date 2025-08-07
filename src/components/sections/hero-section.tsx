'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

type HeroSectionProps = {
  scrollY: number;
};

export function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden text-center">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/20 to-blue-900/20 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div className="absolute inset-0 bg-background/50 z-10" />
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline text-foreground tracking-tighter mb-4 light:text-slate-900">
          <span
            className="text-primary animate-glow"
            style={{ textShadow: '0 0 20px hsl(var(--primary))' }}
          >
            V. Sri Krishna
          </span>{' '}
          Deva Rayudu
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-8 light:text-slate-600">
          A results-oriented AI & Machine Learning Engineer with a strong foundation in designing and deploying intelligent solutions. Experienced in leveraging Generative AI, LangChain, and Azure OpenAI to build robust, end-to-end applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="light:bg-primary light:text-primary-foreground light:hover:bg-primary/90 hover:bg-primary/80 dark:hover:bg-primary/50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-shadow">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="light:bg-primary/10 light:hover:bg-primary/20 light:border-primary/20 light:text-primary dark:bg-background/30 hover:bg-accent dark:hover:bg-accent/50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-accent/50 transition-shadow">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>

      <a href="#experience" className="absolute bottom-10 z-20 animate-bounce" aria-label="Scroll down">
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
}
