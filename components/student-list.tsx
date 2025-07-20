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

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students") || "[]");
    setStudents(savedStudents);
  }, []);

  const handleDeleteStudent = (id: string) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  if (students.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8">
            All Students
          </h2>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
          <div className="text-8xl mb-6">📚</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-4">
            {"No students added yet! 🤗"}
          </h3>
          <p className="text-lg text-gray-500">
            {"Start by adding some students to see them here! 🎉"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[100%] xl:max-w-8xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📋</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          All Students ({students.length})
        </h2>
        <p className="text-gray-600 mt-2">
          {"Here are all our amazing students! 🌟"}
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  👤 Name
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  🔢 Roll No.
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  👨 Father
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  👩 Mother
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  🎓 Class
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  ⭐ GPA
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  🗑️ Action
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 text-lg font-semibold text-purple-600">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 text-lg">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      {student.rollNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-lg">{student.fatherName}</td>
                  <td className="px-6 py-4 text-lg">{student.motherName}</td>
                  <td className="px-6 py-4 text-lg">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-lg">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                      {student.gpa}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
