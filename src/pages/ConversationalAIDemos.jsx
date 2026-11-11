import { DemoPage, DemoEmbed } from '../components/DemoEmbed.jsx'

export default function ConversationalAIDemos() {
  return (
    <DemoPage pageTitle="Conversational AI Demos">
      <DemoEmbed title="Conversational AI - Text Generation" src="https://polarisailabs-textgeneration-gptoss.hf.space" />
      <DemoEmbed title="Conversational AI - Code Generation" src="https://polarisailabs-codegeneration-qwen.hf.space" />
    </DemoPage>
  )
}
