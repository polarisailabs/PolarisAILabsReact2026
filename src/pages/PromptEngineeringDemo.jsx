import { DemoPage, DemoEmbed } from '../components/DemoEmbed.jsx'

export default function PromptEngineeringDemo() {
  return (
    <DemoPage pageTitle="Prompt Engineering Demo">
      <DemoEmbed
        title="Generative AI - Prompt Engineering"
        src="https://polarisailabs-promptengineering.hf.space"
      />
    </DemoPage>
  )
}
