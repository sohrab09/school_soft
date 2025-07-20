"use client";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({
  currentPage,
  setCurrentPage,
}: NavigationProps) {
  const navItems = [
    { id: "home", label: "🏠 Home", icon: "🏠" },
    { id: "form", label: "📝 Add Student", icon: "📝" },
    { id: "search", label: "🔍 Search", icon: "🔍" },
    { id: "list", label: "📋 All Students", icon: "📋" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="text-3xl animate-bounce">🏫</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Happy Valley School
            </h1>
          </div>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
                }`}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden text-xl">{item.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
