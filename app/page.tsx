'use client';

import { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';
import { Github, Linkedin, Mail, FileDown, Sparkles } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row h-screen">
        {/* Left Panel - Profile */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between border-r border-gray-800 overflow-y-auto">
          {/* Header */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-blue-500 animate-pulse-slow" />
                <h1 className="text-4xl lg:text-5xl font-bold glow-text">{portfolioData.name}</h1>
              </div>
              <h2 className="text-xl lg:text-2xl text-gray-400 mb-2">{portfolioData.title}</h2>
              <p className="text-gray-500">{portfolioData.location}</p>
            </div>

            {/* Tagline */}
            <div className="mb-8 p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 glow">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">Ask my AI agent anything</span> about my work, skills, projects, and experience. Built with agentic AI to showcase what I can create.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-blue-500">13+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-purple-500">3.57</div>
                <div className="text-sm text-gray-400">GPA - M.S. AI</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-blue-500">$2M+</div>
                <div className="text-sm text-gray-400">Annual Revenue</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-purple-500">20K+</div>
                <div className="text-sm text-gray-400">Social Followers</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-300">Key Highlights</h3>
              <div className="space-y-3">
                {[
                  "M.S. Applied AI at USD - NLP & Gen AI coursework",
                  "Built StormMate: IoT/AI emergency backup system",
                  "AI-powered customer churn detection with LLMs",
                  "AWS ML certifications & cloud infrastructure",
                  "Founder's mindset: infinite learner, fast executor"
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-400">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={portfolioData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={portfolioData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="/DariusRowser_Resume_Reviewer3.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span className="text-sm">Resume</span>
              </a>
            </div>

            <div className="text-xs text-gray-500">
              Built with Next.js, OpenAI, and agentic AI principles
            </div>
          </div>
        </div>

        {/* Right Panel - Chat Interface */}
        <div className="flex-1 flex flex-col">
          {!showChat ? (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center max-w-2xl">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 glow">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 glow-text">
                    Interactive AI Portfolio
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                    This portfolio uses agentic AI to answer your questions about my background, skills, and projects. It's a demonstration of what I can build.
                  </p>
                </div>

                <button
                  onClick={() => setShowChat(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-lg font-semibold transition-all glow inline-flex items-center gap-3"
                >
                  <Sparkles className="w-5 h-5" />
                  Start Conversation
                </button>

                <div className="mt-12 grid grid-cols-2 gap-4 text-left">
                  {[
                    { label: "Ask about", value: "Technical Skills" },
                    { label: "Explore", value: "Projects & Work" },
                    { label: "Discuss", value: "Experience" },
                    { label: "Learn about", value: "AI Capabilities" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                      <div className="text-sm text-gray-300 font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <ChatInterface />
          )}
        </div>
      </div>
    </div>
  );
}
