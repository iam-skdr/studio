'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type SkillCardProps = {
  skillName: string;
  level: number;
};

export function SkillCard({ skillName, level }: SkillCardProps) {
  return (
    <Card className="glassmorphism flex flex-col h-full">
      <CardHeader>
        <CardTitle>{skillName}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <Progress value={level} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-right">{level}% Mastery</p>
        </div>
      </CardContent>
    </Card>
  );
}
