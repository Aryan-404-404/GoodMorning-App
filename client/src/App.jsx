import { useState } from 'react'
import './App.css'
import api from './config.js';

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/api/submit", form);
    console.log(response.data);

    alert("Good Morning! Data submitted successfully 🌞");

    setForm({ name: "", phone: "", email: "" });
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-100 to-orange-200">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-150">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Good Morning 🌞
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
}

export default App
