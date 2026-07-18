import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import Departments from './components/Departments.jsx'
import OfficialLinks from './components/OfficialLinks.jsx'
import MeritCalculator from './components/MeritCalculator.jsx'
import BranchRecommendation from './components/BranchRecommendation.jsx'
import MeritListViewer from './components/MeritListViewer.jsx'
import ReviewForm from './components/ReviewForm.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import Footer from './components/Footer.jsx'
import { SectionBreaker } from './components/SectionBreaker.jsx'
import { Reveal } from './components/Reveal.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy overflow-x-hidden">
      
      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <SectionBreaker /> 
          
          <Reveal><Timeline /></Reveal>
          <SectionBreaker />
          
          <Reveal><Departments /></Reveal>
          <SectionBreaker />
          
          <Reveal><OfficialLinks /></Reveal>
          <SectionBreaker />
          
          <Reveal><MeritCalculator /></Reveal>
          <SectionBreaker />
          
          <Reveal><BranchRecommendation /></Reveal>
          <SectionBreaker />
          
          <Reveal><MeritListViewer /></Reveal>
          <SectionBreaker />
          
          <Reveal><ReviewForm /></Reveal>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  )
}