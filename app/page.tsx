"use client"

import { useState } from "react"
import HomePage from "@/components/home-page"
import StudentForm from "@/components/student-form"
import StudentList from "@/components/student-list"
import SearchSection from "@/components/search-section"
import Navigation from "@/components/navigation"
import SuccessAnimation from "@/components/success-animation"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleStudentSaved = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="container mx-auto px-4 py-8">
        {currentPage === "home" && <HomePage />}
        {currentPage === "form" && <StudentForm onStudentSaved={handleStudentSaved} />}
        {currentPage === "search" && <SearchSection />}
        {currentPage === "list" && <StudentList />}
      </main>

      {showSuccess && <SuccessAnimation />}
    </div>
  )
}
