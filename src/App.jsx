import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Platform from './pages/Platform.jsx'
import VegaAI from './pages/VegaAI.jsx'
import MarisAI from './pages/MarisAI.jsx'
import SpicaAI from './pages/SpicaAI.jsx'
import LegalProdigyAI from './pages/LegalProdigyAI.jsx'
import ProductManagement from './pages/ProductManagement.jsx'
import Mentorship from './pages/Mentorship.jsx'
import Technology from './pages/Technology.jsx'
import Pricing from './pages/Pricing.jsx'
import ConversationalAIDemos from './pages/ConversationalAIDemos.jsx'
import PromptEngineeringDemo from './pages/PromptEngineeringDemo.jsx'
import RecommendationsDemos from './pages/RecommendationsDemos.jsx'
import TextClassificationDemos from './pages/TextClassificationDemos.jsx'
import Research from './pages/Research.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/products/vegaai" element={<VegaAI />} />
          <Route path="/products/marisai" element={<MarisAI />} />
          <Route path="/products/spicaai" element={<SpicaAI />} />
          <Route path="/products/legalprodigyai" element={<LegalProdigyAI />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demos/conversational-ai" element={<ConversationalAIDemos />} />
          <Route path="/demos/prompt-engineering" element={<PromptEngineeringDemo />} />
          <Route path="/demos/recommendations" element={<RecommendationsDemos />} />
          <Route path="/demos/text-classification" element={<TextClassificationDemos />} />
          <Route path="/research/ai-dna-database" element={<Research title="AI DNA Database" />} />
          <Route path="/research/pharma-ai-economics" element={<Research title="Pharma AI Economics" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ScrollToTop>
  )
}
