'use client';

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getSkillDescriptionAction } from '@/lib/actions';
import { Loader2, Wand2 } from 'lucide-react';

type SkillCardProps = {
  skillName: string;
  level: number;
};

export function SkillCard({ skillName, level }: SkillCardProps) {
  const [isPending, startTransition] = useTransition();
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [audience, setAudience] = useState<string>('Recruiters');

  const handleGenerateDescription = () => {
    startTransition(async () => {
      setError('');
      setDescription('');
      const result = await getSkillDescriptionAction({
        skillName,
        targetAudience: audience,
      });

      if (result.success && result.data) {
        setDescription(result.data.skillDescription);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
    });
  };

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
        <div className="space-y-2">
          <Select value={audience} onValueChange={setAudience}>
            <SelectTrigger className="w-full glassmorphism">
              <SelectValue placeholder="Select Audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Recruiters">For Recruiters</SelectItem>
              <SelectItem value="Clients">For Clients</SelectItem>
              <SelectItem value="Peers">For Peers</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleGenerateDescription} className="w-full" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate Hook
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground h-16 w-full overflow-y-auto">
          {isPending && <p>Generating...</p>}
          {error && <p className="text-destructive">{error}</p>}
          {description && <p className="italic">"{description}"</p>}
        </div>
      </CardFooter>
    </Card>
  );
}
