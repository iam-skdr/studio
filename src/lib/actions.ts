'use server';

import {
  generateSkillDescription,
  type SkillDescriptionInput,
  type SkillDescriptionOutput,
} from '@/ai/flows/skills-hook';

type ActionResult = {
  success: boolean;
  data?: SkillDescriptionOutput;
  error?: string;
};

export async function getSkillDescriptionAction(input: SkillDescriptionInput): Promise<ActionResult> {
  try {
    const result = await generateSkillDescription(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating skill description:', error);
    // It's better to return a generic error message to the client
    return { success: false, error: 'Failed to generate skill description. Please try again.' };
  }
}
