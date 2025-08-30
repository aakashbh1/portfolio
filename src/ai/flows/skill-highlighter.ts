'use server';

/**
 * @fileOverview A skill highlighter AI agent.
 *
 * - highlightSkills - A function that handles the skill highlighting process.
 * - HighlightSkillsInput - The input type for the highlightSkills function.
 * - HighlightSkillsOutput - The return type for the highlightSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HighlightSkillsInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume.'),
  keywords: z.string().describe('Comma separated keywords to highlight in the resume.'),
});
export type HighlightSkillsInput = z.infer<typeof HighlightSkillsInputSchema>;

const HighlightSkillsOutputSchema = z.object({
  highlightedResume: z.string().describe('The resume text with the specified skills highlighted.'),
});
export type HighlightSkillsOutput = z.infer<typeof HighlightSkillsOutputSchema>;

export async function highlightSkills(input: HighlightSkillsInput): Promise<HighlightSkillsOutput> {
  return highlightSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'highlightSkillsPrompt',
  input: {schema: HighlightSkillsInputSchema},
  output: {schema: HighlightSkillsOutputSchema},
  prompt: `You are an expert resume highlighter. You will receive the text of a resume, and a list of keywords. You will return the resume text, but with the keywords wrapped in HTML <mark> tags.

Resume text:
{{resumeText}}

Keywords:
{{keywords}}`,
});

const highlightSkillsFlow = ai.defineFlow(
  {
    name: 'highlightSkillsFlow',
    inputSchema: HighlightSkillsInputSchema,
    outputSchema: HighlightSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
