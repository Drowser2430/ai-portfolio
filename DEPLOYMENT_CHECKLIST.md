# Deployment Checklist

Use this checklist to make sure everything is set up correctly before deploying.

## ✅ Pre-Deployment Checklist

### Local Setup
- [ ] Node.js 18+ installed (`node --version`)
- [ ] Dependencies installed (`npm install` completed successfully)
- [ ] `.env.local` file created with your OpenAI API key
- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Site opens at http://localhost:3000
- [ ] Chat interface works (can ask questions and get responses)
- [ ] Resume PDF is in `/public/` folder
- [ ] All links work (GitHub, LinkedIn, Email)

### Content Review
- [ ] Check `lib/portfolio-data.ts` - all info is accurate
- [ ] Update GitHub link if needed
- [ ] Update LinkedIn link if needed
- [ ] Verify email address is correct
- [ ] Check phone number format
- [ ] Review education dates and GPAs
- [ ] Verify project descriptions
- [ ] Check work experience dates

### Testing
- [ ] Ask the AI: "Tell me about Darius's NLP experience"
- [ ] Ask the AI: "What projects has he built?"
- [ ] Ask the AI: "Why would he be good for Reviewer3?"
- [ ] Test on mobile device (or use browser dev tools)
- [ ] Check that resume downloads correctly
- [ ] Verify all buttons work
- [ ] Test suggested questions

## 🚀 Deployment Checklist

### Vercel Deployment
- [ ] Vercel CLI installed (`npm install -g vercel`)
- [ ] Ran `vercel` command from project folder
- [ ] Added OPENAI_API_KEY environment variable
- [ ] Ran `vercel --prod` for production deployment
- [ ] Received deployment URL
- [ ] Visited deployment URL and tested site
- [ ] Chat works on live site
- [ ] All links work on live site

### Post-Deployment
- [ ] Test the live site thoroughly
- [ ] Share link with a friend to test
- [ ] Check OpenAI usage dashboard (make sure API works)
- [ ] Set usage limits on OpenAI (optional but recommended)
- [ ] Save deployment URL for your email

## 📧 Email Checklist

Before sending to Dr. Khalil:

- [ ] Portfolio site is live and working
- [ ] Tested all major features
- [ ] Resume is updated and available for download
- [ ] Email draft is ready
- [ ] Portfolio URL is included in email
- [ ] Spell-checked email
- [ ] Professional tone
- [ ] Specific mention of her NLP course

## 🎯 Final Checks

- [ ] Site loads in under 3 seconds
- [ ] No console errors in browser
- [ ] Mobile responsive (looks good on phone)
- [ ] Chat responses are relevant and accurate
- [ ] Design looks professional
- [ ] All animations work smoothly
- [ ] GitHub repo is clean (no sensitive data)

## ⚠️ Common Issues to Avoid

- [ ] Don't commit `.env.local` to Git
- [ ] Don't share your OpenAI API key publicly
- [ ] Don't forget to test on live deployment (not just local)
- [ ] Don't send email before site is live
- [ ] Don't forget to set OpenAI usage limits
- [ ] Make sure resume PDF filename matches the link in code

## 🎉 Ready to Deploy!

Once all boxes are checked, you're ready to:
1. Deploy to Vercel
2. Test the live site
3. Send your email to Dr. Khalil

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Deploy to Vercel
vercel

# Add environment variable
vercel env add OPENAI_API_KEY production

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

---

Good luck! 🚀
