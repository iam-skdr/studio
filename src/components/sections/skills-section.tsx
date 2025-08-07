import { SkillCard } from '@/components/skill-card';

const skills = [
  { name: 'AI & Generative AI Development', level: 95 },
  { name: 'Full-Stack Development', level: 92 },
  { name: 'Machine & Deep Learning', level: 90 },
  { name: 'Cloud & DevOps', level: 85 },
  { name: 'Version Control & Collaboration', level: 95 },
  { name: 'Python', level: 94 },
  { name: 'React', level: 90 },
  { name: 'LangChain', level: 88 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Key Skills</h2>
          <p className="text-lg text-muted-foreground mt-4">Leveraging AI to articulate my expertise. Select a target audience to see tailored descriptions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skillName={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
