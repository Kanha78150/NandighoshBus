export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-t from-blue-900 to-indigo-900 text-white py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-2">Email: <a href="mailto:support@nandighoshbus.com" className="underline">support@nandighoshbus.com</a></p>
        <a href="https://wa.me/919999999999" className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600">
          Chat on WhatsApp
        </a>
        <div className="mt-8">
          <p className="text-lg font-medium">Download our mobile app (Coming Soon)</p>
          <div className="w-40 h-12 bg-white text-blue-900 mx-auto mt-2 rounded-lg shadow-inner flex items-center justify-center cursor-pointer">
<img src="/images/PlayStore.png" alt="" />
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-300">© 2025 Nandighosh Bus. All rights reserved.</p>
      </div>
    </footer>
  );
}