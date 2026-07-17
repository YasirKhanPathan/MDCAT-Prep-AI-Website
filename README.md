# MedPrep AI

An AI-powered MDCAT preparation platform for Pakistani medical students. Practice MCQs, chat with an AI tutor, and track your progress across all 5 subjects.

## Features

- **AI Chat Tutor** - Ask any MDCAT question and get instant, detailed explanations
- **Practice MCQs** - Generate unlimited AI-powered practice questions with explanations
- **5 Subjects Covered** - Biology, Chemistry, Physics, English, and Logical Reasoning
- **Progress Tracking** - Monitor accuracy, weak areas, and study streaks
- **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- **Frontend**: Next.js 16 (App Router) + React + TypeScript + Tailwind CSS
- **AI Backend**: Google Gemini API (free tier)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Storage**: localStorage for progress tracking

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/YasirKhanPathan/MedPrep-AI.git
cd MedPrep-AI
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file and add your Gemini API key:
```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

> Get a free API key from [Google AI Studio](https://aistudio.google.com/apikey)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with navbar
│   ├── chat/page.tsx         # AI tutor chat
│   ├── practice/page.tsx     # MCQ practice mode
│   ├── subjects/
│   │   ├── page.tsx          # Subjects listing
│   │   └── [subject]/page.tsx # Subject details
│   ├── progress/page.tsx     # Progress dashboard
│   └── api/
│       ├── chat/route.ts     # Chat API endpoint
│       └── generate-questions/route.ts
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── ChatInterface.tsx     # Chat UI
│   └── MCQCard.tsx           # MCQ component
├── data/
│   └── subjects.ts           # MDCAT syllabus data
└── lib/
    ├── gemini.ts             # Gemini API client
    ├── prompts.ts            # System prompts
    └── progress.ts           # Progress tracking utils
```

## MDCAT Syllabus Coverage

| Subject | Topics | Subtopics |
|---------|--------|-----------|
| Biology | 8 | 40+ |
| Chemistry | 8 | 35+ |
| Physics | 9 | 35+ |
| English | 4 | 16+ |
| Logical Reasoning | 6 | 18+ |

## License

MIT
