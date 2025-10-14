# Quick Start Guide for Darius

## Get This Running in 5 Minutes

### Step 1: Get Your OpenAI API Key (2 minutes)

1. Go to https://platform.openai.com/api-keys
2. Sign in or create account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. Keep it safe - you'll need it in Step 3

### Step 2: Install Everything (1 minute)

Open terminal in the `ai-portfolio` folder and run:

```bash
npm install
```

Wait for it to finish installing all packages.

### Step 3: Add Your API Key (1 minute)

1. Create a file called `.env.local` in the `ai-portfolio` folder
2. Add this line to it:
```
OPENAI_API_KEY=sk-your-key-here
```
3. Replace `sk-your-key-here` with your actual API key from Step 1

### Step 4: Run It (30 seconds)

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

Click "Start Conversation" and ask it something about you!

---

## Deploy to Vercel (Make It Live - 5 Minutes)

### Quick Deploy:

1. Install Vercel:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts (just press Enter for most questions)

4. Add your API key to Vercel:
```bash
vercel env add OPENAI_API_KEY production
```
Paste your OpenAI key when asked.

5. Deploy again with the key:
```bash
vercel --prod
```

6. Done! You'll get a URL like: `https://your-portfolio.vercel.app`

---

## What to Send Dr. Khalil

Once it's deployed, add this to your email:

```
P.S. I built an interactive AI agent portfolio where you can ask questions 
about my background and projects: https://your-portfolio.vercel.app

It's built with Next.js and uses agentic AI principles - a demonstration 
of the kind of systems I can create.
```

---

## Test Questions to Try

Before sending to Dr. Khalil, test these:

1. "Tell me about Darius's experience with NLP"
2. "What projects has he built?"
3. "What makes him a good fit for Reviewer3?"
4. "Explain his background with agentic AI"
5. "What's his experience with transformers and LLMs?"

Make sure the AI gives good, detailed answers!

---

## If Something Goes Wrong

### Can't install packages?
- Make sure you have Node.js 18+ installed
- Try: `npm install --legacy-peer-deps`

### API key not working?
- Check it starts with `sk-`
- Make sure `.env.local` file is in the right folder
- Restart the dev server: stop it (Ctrl+C) and run `npm run dev` again

### Deployment failing?
- Make sure you added the API key to Vercel
- Check you're in the `ai-portfolio` folder
- Try: `vercel --prod` again

---

## Quick Customization

Want to change something quickly?

**Your Info**: Edit `lib/portfolio-data.ts`
**Colors**: Edit `app/globals.css` (search for `blue` or `purple`)
**Layout**: Edit `app/page.tsx`

---

## Ready to Go!

Once deployed, you have a unique, working demonstration of agentic AI that:
- Shows you understand conversational AI
- Demonstrates full-stack development
- Proves you can build and ship products
- Makes you stand out from other applicants

This is exactly the kind of "founder's mindset" and execution Dr. Khalil is looking for!
