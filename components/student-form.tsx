"use client";

import type React from "react";

import { useState } from "react";

interface StudentFormProps {
  onStudentSaved: () => void;
}

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  fatherName: string;
  motherName: string;
  class: string;
  gpa: string;
}

export default function StudentForm({ onStudentSaved }: StudentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    fatherName: "",
    motherName: "",
    class: "",
    gpa: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Student name is required";
    if (!formData.rollNumber.trim())
      newErrors.rollNumber = "Roll number is required";
    if (!formData.fatherName.trim())
      newErrors.fatherName = "Father's name is required";
    if (!formData.motherName.trim())
      newErrors.motherName = "Mother's name is required";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.gpa) newErrors.gpa = "GPA is required";

    const gpaNum = Number.parseFloat(formData.gpa);
    if (formData.gpa && (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4)) {
      newErrors.gpa = "GPA must be between 0 and 4";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check if roll number already exists
    const existingStudents = JSON.parse(
      localStorage.getItem("students") || "[]"
    );
    if (
      existingStudents.some(
        (student: Student) => student.rollNumber === formData.rollNumber
      )
    ) {
      setErrors({ rollNumber: "Roll number already exists" });
      return;
    }

    const newStudent: Student = {
      id: Date.now().toString(),
      ...formData,
    };

    const students = [...existingStudents, newStudent];
    localStorage.setItem("students", JSON.stringify(students));

    setFormData({
      name: "",
      rollNumber: "",
      fatherName: "",
      motherName: "",
      class: "",
      gpa: "",
    });

    onStudentSaved();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Add New Student
          </h2>
          <p className="text-gray-600 mt-2">
            {"Let's add a new friend to our school! 🎉"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                👤 Student Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border-2 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                  errors.name
                    ? "border-red-400"
                    : "border-purple-200 focus:border-purple-400"
                }`}
                placeholder="Enter student name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                🔢 Roll Number
              </label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border-2 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                  errors.rollNumber
                    ? "border-red-400"
                    : "border-purple-200 focus:border-purple-400"
                }`}
                placeholder="Enter roll number"
              />
              {errors.rollNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.rollNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                👨 Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border-2 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                  errors.fatherName
                    ? "border-red-400"
                    : "border-purple-200 focus:border-purple-400"
                }`}
                placeholder="Enter father's name"
              />
              {errors.fatherName && (
                <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                👩 Mother's Name
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border-2 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                  errors.motherName
                    ? "border-red-400"
                    : "border-purple-200 focus:border-purple-400"
                }`}
                placeholder="Enter mother's name"
              />
              {errors.motherName && (
                <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                🎓 Class
              </label>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border-2 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                  errors.class
                    ? "border-red-400"
                    : "border-purple-200 focus:border-purple-400"
                }`}
              >
                <option value="">Select Class</option>
                <option value="Nursery">Nursery</option>
                <option value="KG">KG</option>
                <option value="1st">1st Grade</option>
                <option value="2nd">2nd Grade</option>
                <option value="3rd">3rd Grade</option>
                <option value="4th">4th Grade</option>
                <option value="5th">5th Grade</option>
                <option value="6th">6th Grade</option>
                <option value="7th">7th Grade</option>
                <option value="8th">8th Grade</option>
                <option value="9th">9th Grade</option>
                <option value="10th">10th Grade</option>
              </select>
              {errors.class && (
                <p className="text-red-500 text-sm mt-1">{errors.class}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                ⭐ GPA
              </label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="4"
                className={`w-full px-4 py-3 rounded-2xl border-2 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                  errors.gpa
                    ? "border-red-400"
                    : "border-purple-200 focus:border-purple-400"
                }`}
                placeholder="Enter GPA (0-4)"
              />
              {errors.gpa && (
                <p className="text-red-500 text-sm mt-1">{errors.gpa}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-pink-600"
          >
            🎉 Add Student to Happy Valley! 🎉
          </button>
        </form>
      </div>
    </div>
  );
}
