export default function Features() {
  const features = [
    {
      title: "AC Sleeper Coaches",
      description: "Experience the luxury of air-conditioned sleeping coaches for long journeys."
    },
    {
      title: "Online Ticketing",
      description: "Book your seats online with a few clicks."
    },
    {
      title: "Timely Departure",
      description: "We value your time and ensure timely departures."
    },
    {
      title: "Clean Toilets",
      description: "Hygienic onboard washrooms for your comfort."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-100 text-center px-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}