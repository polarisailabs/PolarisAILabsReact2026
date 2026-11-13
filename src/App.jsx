import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Platform from './pages/Platform.jsx'
import RohiniAI from './pages/RohiniAI.jsx'
import VegaAI from './pages/VegaAI.jsx'
import MarisAI from './pages/MarisAI.jsx'
import SpicaAI from './pages/SpicaAI.jsx'
import DemoRequest from './pages/DemoRequest.jsx'
import SumatiAI from './pages/SumatiAI.jsx'
import ProductManagement from './pages/ProductManagement.jsx'
import Mentorship from './pages/Mentorship.jsx'
import Technology from './pages/Technology.jsx'
import Pricing from './pages/Pricing.jsx'
import ConversationalAIDemos from './pages/ConversationalAIDemos.jsx'
import PromptEngineeringDemo from './pages/PromptEngineeringDemo.jsx'
import RecommendationsDemos from './pages/RecommendationsDemos.jsx'
import TextClassificationDemos from './pages/TextClassificationDemos.jsx'
import AIDNADatabase from './pages/AIDNADatabase.jsx'
import PharmaAIEconomics from './pages/PharmaAIEconomics.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/request-demo" element={<DemoRequest product="platform" />} />
          <Route path="/products/vegaai" element={<VegaAI />} />
          <Route path="/products/vegaai/request-demo" element={<DemoRequest product="vegaai" />} />
          <Route path="/products/marisai" element={<MarisAI />} />
          <Route path="/products/spicaai" element={<SpicaAI />} />
          <Route path="/products/spicaai/request-demo" element={<DemoRequest product="spicaai" />} />
          <Route path="/products/sumatiai" element={<SumatiAI />} />
          <Route path="/products/sumatiai/request-demo" element={<DemoRequest product="sumatiai" />} />
          <Route path="/products/legalprodigyai" element={<Navigate to="/products/sumatiai" replace />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demos/conversational-ai" element={<ConversationalAIDemos />} />
          <Route path="/demos/prompt-engineering" element={<PromptEngineeringDemo />} />
          <Route path="/demos/recommendations" element={<RecommendationsDemos />} />
          <Route path="/demos/text-classification" element={<TextClassificationDemos />} />
          <Route path="/research/ai-dna-database" element={<AIDNADatabase />} />
          <Route path="/research/pharma-ai-economics" element={<PharmaAIEconomics />} />
          <Route path="/platform/rohiniai" element={<RohiniAI />} />
          <Route path="/platform/rohiniai/request-demo" element={<DemoRequest product="rohiniai" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ScrollToTop>
  )
}
