
import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import "./index.css";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("All");

  // Load notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add or Update Note
  const saveNote = () => {
    if (note.trim() === "" && !image) return;

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = {
        ...updatedNotes[editIndex],
        text: note,
        image: image,
        category: category,
      };
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      const newNote = {
        text: note,
        time: new Date().toLocaleString(),
        image: image,
        category: category,
      };
      setNotes([...notes, newNote]);
    }

    setNote("");
    setImage("");
    setCategory("");
  };

  // Delete Note
  const delNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Edit Note
  const editNote = (index) => {
    setNote(notes[index].text);
    setImage(notes[index].image || "");
    setCategory(notes[index].category || "");
    setEditIndex(index);
  };

  // Voice Input
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setNote((prev) => prev + " " + transcript);
    };

    recognition.start();
  };

  // Filter Notes
  const filteredNotes = notes.filter((n) => {
    const matchesSearch = n.text.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || n.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        🎤 Voice Notes App
      </h1>

      {/* Search */}
      <input
        type="text"
        value={search}
        placeholder="🔍 Search notes..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400"
      />

      {/* Input Form */}
      <div className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-md mb-6">
        <input
          type="text"
          value={note}
          placeholder="✍️ Type or Speak..."
          onChange={(e) => setNote(e.target.value)}
          className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className="p-2 rounded-md border border-gray-300"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md border border-gray-300 bg-gray-50"
        >
          <option value="">-- Select Category --</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Health">Health</option>
        </select>

        {/* Save + Voice Buttons */}
        <div className="flex gap-3">
          <button
            onClick={saveNote}
            className="flex-1 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <button
            onClick={startListening}
            className="bg-pink-500 text-white px-4 rounded-lg hover:bg-pink-600 transition"
          >
            🎤 Speak
          </button>
        </div>
      </div>

      {/* Filter Category */}
      <div className="mb-4">
        <label className="mr-2 font-medium text-indigo-600">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-md border border-gray-300"
        >
          <option value="All">All</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Health">Health</option>
        </select>
      </div>

      {/* Notes List in Grid Layout */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotes.map((n, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow flex flex-col gap-2"
          >
            <div>
              <strong className="text-purple-600">
                [{n.category || "Uncategorized"}]
              </strong>{" "}
              {n.text}
              <small className="ml-2 text-gray-500">{n.time}</small>
            </div>
            {n.image && (
              <img
                src={n.image}
                alt="note"
                className="rounded-lg border w-full h-40 object-cover"
              />
            )}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => editNote(index)}
                className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => delNote(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                ❌ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
