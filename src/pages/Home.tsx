import React, { useState } from 'react';

function Home() {
  const faqData = [
    {
      question: "What are the benefits of using a posture corrector?",
      answer: "Posture correctors can help improve spinal alignment, reduce back and neck pain, and boost your overall confidence. They provide support and help you maintain proper posture throughout the day."
    },
    {
      question: "How long should I wear a posture corrector each day?",
      answer: "Start by wearing a posture corrector for 20-30 minutes a day and gradually increase the time as your body gets used to it. Avoid wearing it for extended periods initially to prevent muscle strain."
    },
    {
      question: "Can posture correctors really fix bad posture?",
      answer: "While posture correctors can help improve your posture, they are most effective when combined with exercises and lifestyle changes. They serve as a reminder to maintain proper alignment and support your muscles."
    },
    {
      question: "Are there different types of posture correctors available?",
      answer: "Yes, there are various types of posture correctors, including braces, vests, shirts, and wearable devices. Each type offers different levels of support and is designed for specific needs."
    },
    {
      question: "How do I choose the right posture corrector for me?",
      answer: "Consider your specific needs, comfort preferences, and the level of support you require. Read reviews, compare features, and consult with a healthcare professional if you have any underlying health conditions."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <section className="mb-8 py-8 bg-white rounded-lg shadow-md">
        <div className="px-6">
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
        </div>
      </section>

      {/* Why Posture Matters Section */}
      <section className="mb-8 py-8 bg-white rounded-lg shadow-md">
        <div className="px-6">
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
        </div>
      </section>

      {/* Explore Our Posture Support Products Section */}
      <section className="mb-8 py-8 bg-white rounded-lg shadow-md">
        <div className="px-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore Our Posture Support Products</h3>
          <p className="text-gray-700 leading-relaxed">
            We offer a variety of posture support products to help you achieve and maintain good posture.
            Whether you're looking for a posture corrector brace, lumbar support pillow, or ergonomic chair, we have
            something for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our range includes:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li><b>Posture Corrector Braces:</b> Designed to gently pull your shoulders back, aligning your spine and reducing slouching.</li>
            <li><b>Lumbar Support Pillows:</b> Ergonomically designed to support your lower back, ideal for office chairs and long drives.</li>
            <li><b>Standing Desk Converters:</b> Transform your existing desk into a standing workspace, promoting movement and reducing sedentary behavior.</li>
            <li><b>Ergonomic Chairs:</b> Fully adjustable chairs that provide optimal support for your back, neck, and arms.</li>
            <li><b>Foam Rollers:</b> Versatile tools for muscle recovery and posture alignment, helping to release tension and improve flexibility.</li>
            <li><b>Smart Posture Trainers:</b> Wearable devices that vibrate when you slouch, reminding you to maintain an upright position.</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6457574/pexels-photo-6457574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Posture Corrector Brace"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Posture Corrector Brace</h4>
                <p className="text-gray-700 leading-relaxed">
                  Adjustable posture corrector for upper back support. Helps align your spine and reduce slouching.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4946601/pexels-photo-4946601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Lumbar Support Pillow"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Lumbar Support Pillow</h4>
                <p className="text-gray-700 leading-relaxed">
                  Ergonomic lumbar support pillow for office chairs. Provides support for your lower back and promotes
                  good posture.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Standing Desk Converter"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Standing Desk Converter</h4>
                <p className="text-gray-700 leading-relaxed">
                  Adjustable standing desk converter for ergonomic workspace. Allows you to switch between sitting and
                  standing positions throughout the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-8 py-8 bg-white rounded-lg shadow-md">
        <div className="px-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <button
                  className="flex items-center justify-between w-full py-3 px-4 bg-gray-100 text-gray-800 font-semibold focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={expandedIndex === index}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`px-4 pb-4 bg-gray-50 text-gray-700 ${expandedIndex === index ? 'block' : 'hidden'}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
