import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import Departments from './components/Departments.jsx'
import OfficialLinks from './components/OfficialLinks.jsx'
import MeritCalculator from './components/MeritCalculator.jsx'
import BranchRecommendation from './components/BranchRecommendation.jsx'
import MeritListViewer from './components/MeritListViewer.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Departments />
        <OfficialLinks />
        <MeritCalculator />
        <BranchRecommendation />
        <MeritListViewer />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
