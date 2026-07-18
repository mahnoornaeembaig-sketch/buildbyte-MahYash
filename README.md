🎓 NED Admission Assistant
-
Your Verified Guide to NED 2026 Admissions

A centralized, stateless, and intelligent platform designed to streamline the university admission process, calculate merit, and provide branch recommendations. All without requiring a user login.

🔗 Live Demo: buildbyte-mah-yash.vercel.app

👥 Team: **MahYash Coders**
-
Team Members:

    Mahnoor Naeem

    Yashfeen Raza

**Solution** **Overview**
-
Every year, applicants and volunteers spend countless hours asking and answering the same questions regarding NED University admissions, merit formulas, and department choices. The NED Admission Assistant solves this information chaos by centralizing verified data. We built a lightning-fast, stateless web application that acts as a 24/7 digital counselor, allowing students to instantly access critical timelines, calculate their aggregate, and get personalized department recommendations.

Conceptual Explanation & Backstory
-
We've all been through moments of being unsure about university procedures and deadlines. Many students either miss them entirely or scramble at the eleventh hour. The NED Admission Assistant exists to fix that, giving aspirants instant, reliable answers instead of a waiting game.

**Our backstory:** I (Mahnoor) am the current Team Lead of the NST Admission Gateway Program. In that role, I repeatedly saw students asking the same questions or missing crucial deadlines simply because no one was available to answer in time. While WhatsApp guidance groups exist, no admin can be online 24/7 for every query, so we built a stateless assistant to close that gap.
We chose a stateless design so students can get answers instantly, with zero friction: no login, no account creation, no waiting on a volunteer to reply. Keeping the Supabase layer separate from the frontend logic also means the data (deadlines, merit formulas, cutoffs) can be updated each admission cycle independently, and the same architecture can scale to other universities without a rebuild.

This is currently an MVP tailored specifically to NED. Looking ahead, we plan to:


Expand the platform to support other universities
Deepen our AI integration with more advanced AI agent APIs

Team Work Distribution:
-
Yashfeen: Frontend UI/UX design and development

Mahnoor: Supabase database, Vercel deployment, and GitHub version control



✨ Features
-
🧮 **Instant Merit Calculator:** Client-side calculation using the official 2026 formula (60% Entry Test + 40% HSC/Equivalency) with exact two-decimal precision.

🤖 **Branch Recommendation Engine:** A rule-based filtering system (hardcoded logic in this MVP) that matches a student's aggregate score, personal interests, and career goals with the right NED department. Full AI-driven recommendations are planned for a future iteration.

💬 **FAQ Chatbot:** An embedded, conversational assistant loaded with verified 2026 admission rules, deadlines, and fee structures.

📂 **Merit List Viewer:** Instant access to previous years' cutoff PDFs.

🔒 **Secure Anonymous Feedback:** A stateless review form connected to a Supabase backend, using strict Row Level Security (RLS) policies to allow public submissions while keeping viewing admin-only.

 Technology Stack
-

**Frontend:** React, Vite, Tailwind CSS

**Backend & Database:** Supabase (PostgreSQL) with strict Row Level Security (RLS)

**Deployment & Hosting:** Vercel

🚀 Setup & Local Installation
-

**Clone the repository**

    git clone https://github.com/mahnoornaeembaig-sketch/buildbyte-MahYash.git
    cd your-repo-name

**Install dependencies**

    npm install    

**Configure environment variables**

Create a .env file in the root directory (see Environment Variables below) and add your Supabase project URL and anon key.

**Run the development server**

   npm run dev

The app will be available at http://localhost:5173 (default Vite port).

**Build for production (optional)**

    npm run build

⚙️ Environment Variables
-

To run this project locally, create a .env file in the root directory

VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

If you'd like access to the actual keys (e.g., for testing or evaluation), kindly reach out to us via email:)
