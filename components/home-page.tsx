"use client";

export default function HomePage() {
  return (
    <div className="text-center space-y-8">
      {/* Welcome Section */}
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
          Happy Valley School
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
          {"🌟 Welcome to our magical learning world! 🌟"}
        </p>
      </div>

      {/* Animated School Building */}
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="school-building">
          {/* Main Building */}
          <div className="building-main bg-gradient-to-b from-red-400 to-red-600 rounded-t-3xl mx-auto w-80 h-60 relative animate-float">
            {/* Roof */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[60px] border-l-transparent border-r-transparent border-b-yellow-500"></div>

            {/* Windows */}
            <div className="grid grid-cols-3 gap-4 p-6 pt-12">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-300 rounded-lg h-12 animate-twinkle"
                  style={{ animationDelay: `${i * 0.5}s` }}
                ></div>
              ))}
            </div>

            {/* Door */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-brown-600 w-16 h-20 rounded-t-lg"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 w-2 h-2 rounded-full"></div>
          </div>

          {/* Side Buildings */}
          <div
            className="absolute top-16 -left-20 bg-gradient-to-b from-blue-400 to-blue-600 w-24 h-32 rounded-t-2xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="grid grid-cols-2 gap-2 p-3 pt-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-blue-200 rounded h-6"></div>
              ))}
            </div>
          </div>

          <div
            className="absolute top-16 -right-20 bg-gradient-to-b from-green-400 to-green-600 w-24 h-32 rounded-t-2xl animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="grid grid-cols-2 gap-2 p-3 pt-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-green-200 rounded h-6"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Children */}
      <div className="relative h-32">
        <div
          className="absolute left-1/4 top-0 animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          <div className="text-6xl">👧</div>
          <div className="text-center text-sm font-bold text-purple-600">
            Emma
          </div>
        </div>
        <div
          className="absolute right-1/4 top-0 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-6xl">👦</div>
          <div className="text-center text-sm font-bold text-blue-600">
            Alex
          </div>
        </div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-6xl">🧒</div>
          <div className="text-center text-sm font-bold text-green-600">
            Sam
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-purple-600 mb-2">
            Learn & Grow
          </h3>
          <p className="text-gray-600">Discover amazing things every day!</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold text-pink-600 mb-2">
            Create & Play
          </h3>
          <p className="text-gray-600">Express yourself through art and fun!</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-green-600 mb-2">
            Make Friends
          </h3>
          <p className="text-gray-600">Build lasting friendships together!</p>
        </div>
      </div>
    </div>
  );
}
