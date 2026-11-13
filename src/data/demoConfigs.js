// Content for each product's "Request a Demo" page (rendered by pages/DemoRequest.jsx)
export const DEMO_CONFIGS = {
  spicaai: {
    name: 'SpicaAI',
    backTo: '/products/spicaai',
    intro:
      'See how SpicaAI detects policy conflicts, flags compliance gaps and keeps you ahead of regulatory change. Fill in the form and our team will arrange a demo.',
    companyRequired: true,
    interests: [
      'EU AI Act',
      'GDPR',
      'ISO/IEC 42001',
      'Conflict detection',
      'Regulatory tracking',
      'Antitrust & competition',
    ],
    steps: [
      { icon: 'fa-paper-plane', title: 'Tell us about you', body: 'Share your organization and the regulations that matter most to you.' },
      { icon: 'fa-calendar-check-o', title: 'We reach out', body: 'Our team contacts you to agree a time that suits you.' },
      { icon: 'fa-desktop', title: 'See SpicaAI live', body: 'A walkthrough focused on your policies, frameworks and priorities.' },
    ],
    covered: [
      'Regulatory tracking across the EU AI Act, GDPR and global frameworks',
      'Conflict detection and compliance gap analysis',
      'Risk mitigation and lifecycle automation',
      'Real-time alerts, dashboards and audit trails',
    ],
  },
  marisai: {
    name: 'MarisAI',
    backTo: '/products/marisai',
    intro:
      'See how MarisAI gives your teams and customers relevant, human-like answers from your proprietary enterprise knowledge base. Fill in the form and our team will arrange a demo.',
    companyRequired: true,
    interests: [
      'Proprietary knowledge base',
      '24/7 customer support',
      'Sales & marketing',
      'Employee assistance',
      'Language translation',
      'Task automation',
    ],
    steps: [
      { icon: 'fa-paper-plane', title: 'Tell us about you', body: 'Share your organization and what you would like MarisAI to help with.' },
      { icon: 'fa-calendar-check-o', title: 'We reach out', body: 'Our team contacts you to agree a time that suits you.' },
      { icon: 'fa-desktop', title: 'See MarisAI live', body: 'A walkthrough focused on your knowledge sources and use cases.' },
    ],
    covered: [
      'Answers drawn from a proprietary enterprise knowledge base',
      '24/7 customer support, sales and marketing, and employee assistance',
      'Language translation and task automation',
      'Data analysis and personalized recommendations',
    ],
  },
  vegaai: {
    name: 'VegaAI',
    backTo: '/products/vegaai',
    intro:
      'See how VegaAI turns real-time influencer content into instant, verified answers for your next trip. Fill in the form and our team will arrange a demo.',
    companyRequired: false,
    interests: [
      'Real-time destination updates',
      'Things Not To Do & readiness checks',
      'Model selection & ensembling',
      'Video & image understanding',
      'Voice-enabled search',
      'Personalized recommendations',
    ],
    steps: [
      { icon: 'fa-paper-plane', title: 'Tell us about you', body: 'Share who you are and what you would like VegaAI to help with.' },
      { icon: 'fa-calendar-check-o', title: 'We reach out', body: 'Our team contacts you to agree a time that suits you.' },
      { icon: 'fa-desktop', title: 'See VegaAI live', body: 'A walkthrough of real queries, from question to answer and images.' },
    ],
    covered: [
      'Real-time destination answers sourced from top travel influencers',
      'Choosing a model, or letting VegaAI ensemble several',
      '"Things Not To Do" guidance and pre-travel readiness checks',
      'Text and image answers you can share',
    ],
  },
  platform: {
    name: 'PolarisAI Platform',
    backTo: '/platform',
    intro:
      'Tell us about your current AI spend and the hardware you already have. We will set up a discovery call, followed by a live demo and technical deep-dive of PolarisAI Platform.',
    companyRequired: true,
    interests: [
      'Cutting AI/API costs',
      'Running models offline',
      'Fine-tuning on our own data',
      'PreciseQuant & PreciseTrim',
      'Edge & mobile deployment',
      'Hardware compatibility check',
    ],
    steps: [
      { icon: 'fa-phone', title: 'Discovery call (30 minutes)', body: 'Walk through your current AI/API spend, the workloads you would like to bring in-house, and the hardware you already have.' },
      { icon: 'fa-desktop', title: 'Functional demo & technical deep-dive', body: 'A live platform walkthrough, conducted under NDA.' },
      { icon: 'fa-check-square-o', title: 'Compatibility check', body: 'We check which optimized models fit your existing infrastructure.' },
    ],
    covered: [
      'Recomposing and optimizing an open-weight SLM end to end',
      'Offline inference on CPU, or CPU and GPU together',
      'Fine-tuning on your own domain data',
      'A compatibility check against your existing infrastructure',
    ],
  },
  rohiniai: {
    name: 'RohiniAI Platform',
    backTo: '/platform/rohiniai',
    intro:
      'Tell us about the data and the AI systems you work with. We will set up a discovery call, followed by a live demo of the RohiniAI Platform data engine and guardrails.',
    companyRequired: true,
    interests: [
      'Data collection & curation',
      'Data annotation',
      'RLHF & preference data',
      'Red teaming',
      'Evaluation datasets',
      'Input & output guardrails',
    ],
    steps: [
      { icon: 'fa-phone', title: 'Discovery call (30 minutes)', body: 'Walk through your data needs, your models and where guardrails matter most.' },
      { icon: 'fa-desktop', title: 'Live demo', body: 'A walkthrough of the data engine and guardrails, conducted under NDA.' },
      { icon: 'fa-check-square-o', title: 'Scoping', body: 'We outline a pilot around your data and deployment.' },
    ],
    covered: [
      'Collecting, curating and annotating data',
      'RLHF, red teaming and evaluation datasets',
      'Input and output guardrails around your model',
      'Quality controls and human-in-the-loop review',
    ],
  },
}