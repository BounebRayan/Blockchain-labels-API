import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 bg-[#15171c]">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
      <section id="getting-started" className="mb-7">
          <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-4">
            Our API offers a comprehensive suite of tools for labeling and analyzing blockchain wallet addresses. It’s designed to enrich your applications with detailed context and insights into blockchain transactions.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Base URL:</strong> <a href="https://api-c.walletlabels.xyz/" className="text-blue-300 hover:underline">https://api-c.walletlabels.xyz/</a>
          </p>
          <p className="text-gray-300 mb-4">
            To begin using the WalletLabels API, you first need to obtain an API key. Please <a href="https://api-c.walletlabels.xyz/register" className="text-blue-300 hover:underline">register here</a> to get started.
          </p>
        </section>
        <section id="api-reference" className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">WalletLabels API Reference</h2>
          <p className="text-gray-300 mb-4">
            <strong>Authentication:</strong> Currently, there are no rate limits on API requests.
          </p>
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-gray-300">
              Headers:
              <br />
              x-api-key: demo-api-key-x-00000
            </code>
          </pre>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Label Data Structure</h3>
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2 text-gray-300">Field</th>
                <th className="border border-gray-600 px-4 py-2 text-gray-300">Type</th>
                <th className="border border-gray-600 px-4 py-2 text-gray-300">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">blockchain</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Name of the blockchain network.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">address</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Blockchain address being labeled.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">address_name</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Human-readable name for the address.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">label_type</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Broad category of the label (e.g., ‘token’).</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">label_subtype</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Specific categorization under the label type.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">label</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Concise label or tag for the address.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">origin</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Indicates where the labels have been imported from: current sources: arkham / etherscan / walletlabels.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">source</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">String</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Data Source of the label.</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Source Field Descriptions</h3>
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2 text-gray-300">Data Source</th>
                <th className="border border-gray-600 px-4 py-2 text-gray-300">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Ground Truth</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">This method verifies address ownership by conducting real transactions on the blockchain, ensuring the highest reliability and evidence-backed labeling.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Research</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Relying on careful research of information available to the public, this method enhances metadata gathering, especially during important industry events, to provide more context and detail to labeling efforts.</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Heuristic</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Utilizing data models built from historical transaction data, this approach clusters addresses based on transaction patterns, providing valuable insights despite lower certainty compared to ground truth.</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Machine Learning</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-300">Leveraging machine learning algorithms with on/off-chain data, this method trains address clustering models for automated metadata generation, offering potential scalability and efficiency gains.</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-300 mb-4">
            <strong>Playground:</strong><br/> Test the API live in our <a href="/reference" className="text-blue-300 hover:underline">playground</a>. Try out different requests and see real-time responses.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Support and Community:</strong><br/> Join our <a href="https://t.me/walletlabels" className="text-blue-300 hover:underline">Telegram community</a> for support, discussions, and updates. Follow us on <a href="https://twitter.com/walletlabels" className="text-blue-300 hover:underline">Twitter</a> for the latest news.
          </p>
          <p className="text-gray-300">
            <strong>Additional Resources:</strong> <br />
            API Key Registration: <a href="https://api-c.walletlabels.xyz/register" className="text-blue-300 hover:underline">Get an API key</a> <br />
            WalletLabels Home: <a href="https://walletlabels.xyz/" className="text-blue-300 hover:underline">Visit our website</a>
          </p>
        </section>
      </div>
    </main>
  );
}
