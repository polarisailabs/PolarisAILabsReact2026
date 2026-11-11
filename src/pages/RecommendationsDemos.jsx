import { DemoPage, DemoEmbed } from '../components/DemoEmbed.jsx'

export default function RecommendationsDemos() {
  return (
    <DemoPage pageTitle="Recommendation Engine Demos">
      <DemoEmbed
        title="Product Recommendations"
        note={
          <>
            <p>
              <strong>This Recommendation Engine uses Item based collaborative filtering</strong>
            </p>
            <p>
              <strong>Try:</strong> 22969 or 21218 or 22173
            </p>
          </>
        }
        src="https://polarisailabs-ibcfproductrecommendations.hf.space"
        height={500}
      />
      <hr className="max-w-5xl mx-auto border-gray-200 my-2" />
      <DemoEmbed
        title="Product Recommendations"
        note={
          <>
            <p>
              <strong>This Recommendation Engine uses user based collaborative filtering</strong>
            </p>
            <p>
              <strong>Try:</strong> Customer ID 1:12702 and Customer ID 2:14608
            </p>
          </>
        }
        src="https://polarisailabs-ubcfproductrecommendations.hf.space"
        height={500}
      />
      <hr className="max-w-5xl mx-auto border-gray-200 my-2" />
      <DemoEmbed
        title="Hotel Recommendations"
        note={
          <p>
            <strong>Try:</strong> Location: France and Purpose of Travel: Honeymoon with my wife (optional)
          </p>
        }
        src="https://polarisailabs-hotelrecommendations.hf.space"
      />
      <hr className="max-w-5xl mx-auto border-gray-200 my-2" />
      <DemoEmbed
        title="Movie Recommendations"
        note={
          <p>
            <strong>Try something like:</strong> Shawshank Redemption
          </p>
        }
        src="https://polarisailabs-movierecommendations.hf.space"
        height={500}
      />
    </DemoPage>
  )
}
