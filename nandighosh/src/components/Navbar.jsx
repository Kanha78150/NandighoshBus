export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo + Branding */}
      <div className="flex items-center gap-3">
        <img
          src="/images/logo.jpeg"
          alt="Nandighosh Bus Logo"
          className="h-12 w-12 object-cover rounded-full"
        />
        <div className="leading-tight">
          <h1 className="text-xl font-bold text-blue-700">Nandighosh Bus</h1>
          <p className="text-xs text-gray-600 tracking-wide italic">Travel the Land of Temples</p>
        </div>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-blue-700 text-2xl"
        onClick={() =>
          document.getElementById("menu").classList.toggle("hidden")
        }
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        id="menu"
        className="hidden md:flex gap-6 text-gray-700 text-base font-medium"
      >
        <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
        <li><a href="#routes" className="hover:text-blue-600">Routes</a></li>
        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}