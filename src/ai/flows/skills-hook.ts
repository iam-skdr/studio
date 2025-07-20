'use server';
/**
 * @fileOverview AI-enhanced Skills Showcase flow.
 *
 * - generateSkillDescription - A function that generates compelling one-liner copy for each skill.
 * - SkillDescriptionInput - The input type for the generateSkillDescription function.
 * - SkillDescriptionOutput - The return type for the generateSkillDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillDescriptionInputSchema = z.object({
  skillName: z.string().describe('The name of the skill.'),
  targetAudience: z.string().describe('The target audience for the skill description.'),
});
export type SkillDescriptionInput = z.infer<typeof SkillDescriptionInputSchema>;

const SkillDescriptionOutputSchema = z.object({
  skillDescription: z.string().describe('A compelling one-liner description of the skill, tailored to the target audience.'),
});
export type SkillDescriptionOutput = z.infer<typeof SkillDescriptionOutputSchema>;

export async function generateSkillDescription(input: SkillDescriptionInput): Promise<SkillDescriptionOutput> {
  return generateSkillDescriptionFlow(input);
}

const generateSkillDescriptionPrompt = ai.definePrompt({
  name: 'generateSkillDescriptionPrompt',
  input: {schema: SkillDescriptionInputSchema},
  output: {schema: SkillDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling skill descriptions.

  Generate a one-liner description for the following skill, tailored to attract the specified target audience.

  Skill Name: {{{skillName}}}
  Target Audience: {{{targetAudience}}}
  `,
});

const generateSkillDescriptionFlow = ai.defineFlow(
  {
    name: 'generateSkillDescriptionFlow',
    inputSchema: SkillDescriptionInputSchema,
    outputSchema: SkillDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateSkillDescriptionPrompt(input);
    return output!;
  }
);
