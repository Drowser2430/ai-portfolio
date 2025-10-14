import { OpenAI } from 'openai';
import { portfolioData, systemPrompt } from '@/lib/portfolio-data';
import { NextRequest, NextResponse } from 'next/server';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your .env.local file.' },
        { status: 500 }
      );
    }

    // Create a context-enriched system message
    const contextualSystemPrompt = `${systemPrompt}

Here is the detailed information about Darius:

Name: ${portfolioData.name}
Title: ${portfolioData.title}
Location: ${portfolioData.location}
Email: ${portfolioData.email}

Summary: ${portfolioData.summary}

Education:
${portfolioData.education.map(edu => `
- ${edu.degree} from ${edu.institution} (${edu.period}) - GPA: ${edu.gpa}
  ${edu.highlights?.map(h => `  * ${h}`).join('\n')}
`).join('\n')}

Technical Skills:
- Languages: ${portfolioData.technicalSkills.languages.join(', ')}
- ML & NLP: ${portfolioData.technicalSkills.mlAndNLP.join(', ')}
- Data Science: ${portfolioData.technicalSkills.dataScience.join(', ')}
- NLP & GenAI: ${portfolioData.technicalSkills.nlpAndGenAI.join(', ')}
- Visualization: ${portfolioData.technicalSkills.visualization.join(', ')}
- Cloud & DevOps: ${portfolioData.technicalSkills.cloudAndDevOps.join(', ')}
- Additional: ${portfolioData.technicalSkills.additional.join(', ')}
- Soft Skills: ${portfolioData.technicalSkills.softSkills.join(', ')}

Key Projects:
${portfolioData.projects.map(proj => `
- ${proj.name} (${proj.date}):
  ${proj.description}
  Technologies: ${proj.technologies.join(', ')}
  ${proj.github ? `GitHub: ${proj.github}` : ''}
  Highlights:
  ${proj.highlights.map(h => `  * ${h}`).join('\n')}
`).join('\n')}

Professional Experience:
${portfolioData.experience.map(exp => `
- ${exp.title} at ${exp.company} (${exp.period})
  Location: ${exp.location}
  Key Achievements:
  ${exp.achievements.map(a => `  * ${a}`).join('\n')}
`).join('\n')}

Certifications: ${portfolioData.certifications.join(', ')}

Affiliations: ${portfolioData.affiliations.join(', ')}`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: contextualSystemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const assistantMessage = completion.choices[0].message.content;

    return NextResponse.json({ message: assistantMessage });
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
