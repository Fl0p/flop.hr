import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8">
      <main className="flex flex-col items-center justify-center flex-grow space-y-2 max-w-full mx-auto">
        <section className="w-full flex flex-col md:flex-row items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">Hi there! You&apos;re probably on this website because you own at least one FlopCoin.</h1>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row items-center gap-6 bg-gray-100 dark:bg-gray-900 p-4 rounded">
          <div className="bg-gray-200 dark:bg-gray-800 w-80 h-80 flex items-center justify-center rounded order-1 md:order-2 overflow-hidden flex-shrink-0 relative">
            <Image src="/s1.jpg" alt="FlopCoin" fill className="object-cover" />
          </div>
          <div className="order-2 md:order-1 flex-grow">
            <h2 className="text-2xl font-bold mb-3">What is a FlopCoin?</h2>
            <p className="mb-2">FlopCoin (Flop.hr) is a physical embodiment of <strong>one hour of Flop&apos;s time</strong> — one hour of his life.</p>
            <p className="mb-2">Owning a FlopCoin means you hold a <strong>public promise</strong> from Flop to dedicate one full hour of his time to fulfilling your request.<br />
            When redeemed, this request takes priority over Flop&apos;s personal interests or plans.</p>
            <p>Additionally, each FlopCoin is a <strong>unique art object</strong> and a <strong>rare artifact</strong>.<br />
            There was only <strong>one issuance</strong> of FlopCoins, and there are around <strong>100 unique coins</strong> in existence. Some have already been used.</p>
            <p>Some of the lucky FlopCoin owners are featured <a href="/owners" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">here</a></p>
            <p className="mt-2"><strong>Q: How can you I get a FlopCoin?</strong></p>
            <p><strong>A:</strong> The only way is if one of the <a href="/owners" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">owners</a> agrees to give it to you, gift it, or sell it.</p>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row items-center gap-6 bg-gray-200 dark:bg-gray-800 p-4 rounded">
          <div className="bg-gray-200 dark:bg-gray-700 w-80 h-80 flex items-center justify-center rounded overflow-hidden flex-shrink-0 relative">
            <Image src="/s2.jpg" alt="FlopCoin usage" fill className="object-cover" />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-3">How can you use a FlopCoin?</h2>
            <p className="mb-2">First, you need to know who Flop is and have a way to contact him.</p>
            <p className="mb-2">You must be in the same space-time location as Flop. Then, send him a message starting with:<br />
            <strong>&quot;I want…&quot;</strong> and attach a photo as proof that you possess a FlopCoin.</p>
            <p className="mb-2">After that, you&apos;ll agree on the <strong>details</strong>: where, when, and how the request will be fulfilled. You&apos;ll need to meet up to redeem the coin.</p>
            <p className="mb-2">In <strong>special or emergency situations</strong>, you can use the FlopCoin to ask Flop <strong>to stop doing something immediately</strong> — effectively pausing his activity for a full hour.</p>
            <p>You can also <strong>gift</strong> your FlopCoin, <strong>sell</strong> it on a marketplace, or <strong>keep it as a valuable souvenir</strong>.</p>
            <p>Yes, you can pawn FlopCoin or take it to a scrap metal dealer. It is made of 99.99% pure silver.</p>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row items-center gap-6  bg-gray-100 dark:bg-gray-900 p-4 rounded">
          <div className="bg-gray-200 dark:bg-gray-800 w-80 h-80 flex items-center justify-center rounded order-1 md:order-2 overflow-hidden flex-shrink-0 relative">
            <Image src="/s3.jpg" alt="FlopCoin examples" fill className="object-cover" />
          </div>
          <div className="order-2 md:order-1 flex-grow">
            <h2 className="text-2xl font-bold mb-3">Examples of how to use a FlopCoin:</h2>
            <p className="mb-2">You could ask Flop to:</p>
            <ul className="list-disc pl-5 mb-2">
              <li>Cook breakfast</li>
              <li>Walk your dog</li>
              <li>Fix your computer</li>
              <li>Give you a massage</li>
              <li>Paint a fence</li>
            </ul>
            <p className="mb-2">Here are a few <strong>real examples</strong> of how FlopCoins have already been used:</p>
            <ul className="list-disc pl-5">
              <li>Flop ran non-stop for an hour</li>
              <li>Flop distributed flyers to help rehome a kitten</li>
              <li>Flop spent an hour as a submissive at a themed party</li>
            </ul>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row items-center gap-6 bg-gray-300 dark:bg-gray-700 p-4 rounded">
          <div className="bg-gray-200 dark:bg-gray-800 w-80 h-80 flex items-center justify-center rounded overflow-hidden flex-shrink-0 relative">
            <Image src="/s4.jpg" alt="FlopCoin limitations" fill className="object-cover" />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-3">What can&apos;t you do with a FlopCoin?</h2>
            <p className="mb-2">Obviously, you <strong>cannot</strong> use a FlopCoin to force Flop to break the <strong>law</strong>, <strong>civil codes</strong>, <strong>regulations</strong>, or <strong>common moral standards</strong>.<br />
            For example, you <strong>cannot</strong> make him rob an old lady or beat up your ex.</p>
            <p>Also, FlopCoin <strong>is not a currency</strong> — no physical or digital entity in the world accepts it as a payment method.</p>
          </div>
        </section>
      </main>
      <footer className="text-center text-gray-500 text-sm py-4">
        (c) 2025 FlopCoin.art
      </footer>
    </div>
  );
}
