"use client";

import { useState, useEffect } from "react";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  fatherName: string;
  motherName: string;
  class: string;
  gpa: string;
}

export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students") || "[]");
    setStudents(savedStudents);
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredStudents([]);
      return;
    }

    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchTerm, students]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Find Your Friends
        </h2>
        <p className="text-gray-600 mt-2">
          {"Search by name or roll number! 🕵️‍♀️"}
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <div className="relative mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type student name or roll number..."
            className="w-full px-6 py-4 text-xl rounded-2xl border-2 border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
            🔍
          </div>
        </div>

        {searchTerm && (
          <div className="mb-4">
            <p className="text-lg text-gray-600">
              {filteredStudents.length > 0
                ? `Found ${filteredStudents.length} student${
                    filteredStudents.length > 1 ? "s" : ""
                  } 🎉`
                : "No students found 😔"}
            </p>
          </div>
        )}

        {filteredStudents.length > 0 && (
          <div className="grid gap-6">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-600">
                    👤 {student.name}
                  </h3>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">
                    Roll: {student.rollNumber}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="font-semibold text-gray-700">
                        👨 Father:
                      </span>{" "}
                      {student.fatherName}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold text-gray-700">
                        👩 Mother:
                      </span>{" "}
                      {student.motherName}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="font-semibold text-gray-700">
                        🎓 Class:
                      </span>{" "}
                      {student.class}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold text-gray-700">
                        ⭐ GPA:
                      </span>{" "}
                      {student.gpa}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {searchTerm && filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-8xl mb-4">🤔</div>
            <p className="text-xl text-gray-600">
              {"Hmm, we couldn't find anyone with that name or roll number."}
            </p>
            <p className="text-lg text-gray-500 mt-2">
              {"Try searching with a different name or roll number! 🔍"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
