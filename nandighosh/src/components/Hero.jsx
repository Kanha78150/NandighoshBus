import { useRef } from "react";

export default function Hero() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = {
      from: form.from.value.trim(),
      to: form.to.value.trim(),
      date: form.date.value,
      type: form.type.value,
    };

    // Store in localStorage
    const stored = JSON.parse(localStorage.getItem("busBooking")) || [];
    localStorage.setItem("busBooking", JSON.stringify([...stored, formData]));

    alert("Booking saved successfully!");
    form.reset();
  };

  const inputClass =
    "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 md:flex md:items-center md:justify-between">
 
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-6xl md:text-5xl font-bold leading-tight">
          Connecting Odisha, Comfortably
        </h1>
        <p className="mt-4 text-lg leading-relaxed max-w-xl">
          Travel across Odisha with comfort and reliability. Nandighosh Bus brings you
          modern coaches, timely departures, and hassle-free booking — your journey made easy.
        </p>
      </div>


      <div className="w-full md:w-1/2 flex justify-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-sm space-y-5 border border-gray-200"
        >
          <input name="from" type="text" placeholder="From" className={inputClass} required />
          <input name="to" type="text" placeholder="To" className={inputClass} required />
          <input name="date" type="date" className={inputClass} required />
          <select name="type" className={inputClass} defaultValue="Sleeper" required>
            <option value="Sleeper">Sleeper</option>
            <option value="Seater">Seater</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}