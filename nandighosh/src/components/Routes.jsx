export default function Routes() {
  const routeList = [
    "Balasore to Sambalpur",
    "Balasore to Jamshedpur",
    "Balasore to Berhampur"
  ];
  return (
    <section id="routes" className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: "url('/bus-bg.jpg')" }}>
      <div className="bg-black bg-opacity-60 py-16 px-4">
        <h2 className="text-3xl text-center font-semibold mb-10">Popular Routes</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {routeList.map((route, idx) => (
            <div key={idx} className="bg-white text-black p-6 rounded-lg shadow-xl text-center hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold">{route}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}