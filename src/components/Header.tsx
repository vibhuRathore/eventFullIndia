
export function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-500 to-emerald-800 py-4 shadow-md">
      <div className="container flex items-center justify-between">
        <h1 className="text-lg font-bold ml-4 text-white">Artistly</h1>
        <nav className="flex space-x-4 mr-4">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/manage" className="text-white hover:text-gray-200">Manage</a>
          </nav>
      </div>
    </header>
  );
}
