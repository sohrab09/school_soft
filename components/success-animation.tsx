"use client"

import { useEffect, useState } from "react"

export default function SuccessAnimation() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate confetti pieces
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setConfetti(pieces)

    // Play success sound (if available)
    try {
      const audio = new Audio(
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT",
      )
      audio.play().catch(() => {
        // Ignore audio errors
      })
    } catch (error) {
      // Ignore audio errors
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Success Message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Student Added Successfully!
          </h3>
          <p className="text-gray-600 mt-2">{"Welcome to Happy Valley School! 🏫"}</p>
        </div>
      </div>

      {/* Confetti Animation */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            backgroundColor: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd"][piece.id % 6],
          }}
        />
      ))}

      {/* Floating Hearts */}
      <div className="absolute top-1/4 left-1/4 text-4xl animate-float">💖</div>
      <div className="absolute top-1/3 right-1/4 text-4xl animate-float" style={{ animationDelay: "1s" }}>
        ⭐
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-4xl animate-float" style={{ animationDelay: "2s" }}>
        🌟
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>
        🎊
      </div>
    </div>
  )
}
