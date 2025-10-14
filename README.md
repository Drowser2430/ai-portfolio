# Darius Rowser - Interactive AI Portfolio

An agentic AI-powered portfolio that uses conversational AI to showcase my background, skills, projects, and experience. Built with Next.js 14, OpenAI, and modern web technologies.

## 🚀 Features

- **Conversational AI Agent**: Chat interface powered by GPT-4 that knows my entire portfolio
- **Futuristic Design**: Modern, clean UI with animations and gradient effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Real-time Interaction**: Instant responses with typing indicators
- **Smart Context**: AI agent has deep knowledge of my background and can answer detailed questions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **AI**: OpenAI GPT-4 API
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- OpenAI API key (get one at https://platform.openai.com/api-keys)

## 🔧 Setup Instructions

### 1. Install Dependencies

\`\`\`bash
cd ai-portfolio
npm install
\`\`\`

### 2. Configure Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Edit \`.env.local\` and add your OpenAI API key:

\`\`\`
OPENAI_API_KEY=sk-your-actual-api-key-here
OPENAI_MODEL=gpt-4-turbo-preview
\`\`\`

**Important**: Never commit your \`.env.local\` file to Git. It's already in \`.gitignore\`.

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test the Chat

Click "Start Conversation" and try asking:
- "Tell me about Darius's experience with NLP"
- "What projects has he built?"
- "What makes him a good fit for an AI engineering role?"
- "Explain his technical skills"

## 🚀 Deployment to Vercel (Free)

### Option 1: Deploy via Vercel CLI (Fastest)

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy from project directory:
\`\`\`bash
cd ai-portfolio
vercel
\`\`\`

3. Follow the prompts (it will auto-detect Next.js)

4. Add your environment variable:
\`\`\`bash
vercel env add OPENAI_API_KEY
\`\`\`
Paste your API key when prompted.

5. Redeploy with environment variable:
\`\`\`bash
vercel --prod
\`\`\`

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub (create a new repo)

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your GitHub repository

4. Vercel will auto-detect Next.js settings

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add: \`OPENAI_API_KEY\` with your API key
   - Add: \`OPENAI_MODEL\` with value \`gpt-4-turbo-preview\`

6. Click "Deploy"

7. Your site will be live at \`https://your-project.vercel.app\`

### Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., \`dariusrowser.com\`)
4. Follow DNS configuration instructions

## 📁 Project Structure

\`\`\`
ai-portfolio/
├── app/
│   ├── api/chat/route.ts    # OpenAI API endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   └── ChatInterface.tsx    # Chat UI component
├── lib/
│   └── portfolio-data.ts    # Your portfolio content
├── public/                  # Static files (add resume PDF here)
├── .env.local.example       # Example environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## ✏️ Customization

### Update Your Information

Edit \`lib/portfolio-data.ts\` to customize:
- Personal information
- Education details
- Technical skills
- Projects
- Work experience
- Links (GitHub, LinkedIn, etc.)

### Change AI Model

In \`.env.local\`, you can use different models:
\`\`\`
OPENAI_MODEL=gpt-4-turbo-preview  # Most capable
OPENAI_MODEL=gpt-4                # Slightly cheaper
OPENAI_MODEL=gpt-3.5-turbo        # Most cost-effective
\`\`\`

### Update Styling

- Colors: Edit \`app/globals.css\` and \`tailwind.config.ts\`
- Layout: Modify \`app/page.tsx\`
- Chat UI: Edit \`components/ChatInterface.tsx\`

### Add Resume PDF

1. Export your resume as PDF
2. Name it \`DariusRowser_Resume_Reviewer3.pdf\`
3. Place it in the \`public/\` folder
4. It will be downloadable via the "Resume" button

## 💡 Tips for Demo

**Best Questions to Ask the AI:**
- "What experience does Darius have with machine learning?"
- "Tell me about the StormMate project"
- "What's his background in NLP and generative AI?"
- "Why would he be a good fit for a founding engineer role?"
- "Explain his leadership experience"

**Showcase Features:**
- The AI maintains conversation context
- It provides specific examples from your portfolio
- Responses are natural and conversational
- Shows understanding of agentic AI principles

## 🐛 Troubleshooting

### "OpenAI API key not configured"
- Make sure \`.env.local\` exists and contains your API key
- Restart the dev server after adding environment variables
- Check that the key starts with \`sk-\`

### Chat not responding
- Check browser console for errors
- Verify your OpenAI API key is valid
- Make sure you have API credits in your OpenAI account

### Styling issues
- Run \`npm install\` again
- Clear \`.next\` folder: \`rm -rf .next\`
- Restart dev server

### Vercel deployment issues
- Ensure environment variables are set in Vercel dashboard
- Check build logs in Vercel for specific errors
- Make sure all dependencies are in \`package.json\`

## 📊 API Usage & Costs

- Each conversation message costs ~$0.01-0.03 (GPT-4)
- Free tier includes $5 credit (enough for 100-500 messages)
- Monitor usage at https://platform.openai.com/usage
- Consider using GPT-3.5 for cost savings during testing

## 🔐 Security Notes

- Never commit \`.env.local\` to Git
- Keep your OpenAI API key private
- Set usage limits in OpenAI dashboard
- The API route is server-side only (key not exposed to browser)

## 📞 Support

If you have questions or issues:
1. Check the troubleshooting section above
2. Review Next.js docs: https://nextjs.org/docs
3. Review OpenAI API docs: https://platform.openai.com/docs

## 📝 License

This project is for portfolio use. Feel free to use it as inspiration for your own AI portfolio!

---

Built with ❤️ by Darius Rowser | Demonstrating agentic AI capabilities
