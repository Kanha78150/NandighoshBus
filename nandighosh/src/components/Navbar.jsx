export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-700">Nandighosh Bus</div>
      <button className="md:hidden text-blue-700" onClick={() => document.getElementById('menu').classList.toggle('hidden')}>
        ☰
      </button>
      <ul id="menu" className="hidden md:flex gap-6 text-gray-700">
        <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
        <li><a href="#routes" className="hover:text-blue-600">Routes</a></li>
        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}