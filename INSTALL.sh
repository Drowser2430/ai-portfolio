#!/bin/bash

# AI Portfolio Installation Script
# This script helps you set up the portfolio quickly

echo "🚀 Setting up your AI Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Check for .env.local file
if [ ! -f ".env.local" ]; then
    echo "⚠️  No .env.local file found"
    echo ""
    echo "📝 Creating .env.local from template..."
    cp .env.local.example .env.local
    echo ""
    echo "🔑 IMPORTANT: You need to add your OpenAI API key!"
    echo ""
    echo "Steps:"
    echo "1. Get your API key from: https://platform.openai.com/api-keys"
    echo "2. Open .env.local in a text editor"
    echo "3. Replace 'your_openai_api_key_here' with your actual key"
    echo ""
    read -p "Press Enter when you've added your API key..."
else
    echo "✅ .env.local file found"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "📚 For more information, check:"
echo "  - README.md for full documentation"
echo "  - QUICKSTART.md for quick start guide"
echo "  - DEPLOYMENT_CHECKLIST.md for deployment steps"
echo ""
