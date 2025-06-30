import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Improve Your Posture, Improve Your Life</h2>
        <p className="text-gray-700 leading-relaxed">
          Discover the best posture correction solutions to help you stand taller, feel better, and boost your confidence.
          We offer a curated selection of products designed to support your spine and promote healthy posture habits.
        </p>
        <img
          src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Person with good posture"
          className="mt-4 rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Posture Matters</h3>
        <p className="text-gray-700 leading-relaxed">
          Slouching can lead to a variety of health issues, including back pain, neck pain, headaches, and even poor circulation.
          Maintaining good posture is essential for your overall well-being.
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Reduces strain on muscles and ligaments</li>
          <li>Improves breathing and circulation</li>
          <li>Boosts confidence and reduces stress</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">What is the best posture corrector?</h4>
            <p className="text-gray-700">
              The best posture corrector depends on your individual needs and preferences. We offer a variety of options,
              including braces, supports, and wearable devices.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">How long should I wear a posture corrector?</h4>
            <p className="text-gray-700">
              It's generally recommended to start with 20-30 minutes per day and gradually increase the wearing time as
              your body adjusts.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </section>
    </div>
  );
}

export default Home;
