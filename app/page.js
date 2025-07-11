"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const changedesc = (e) => setDesc(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    setMaintask([...maintask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    const copytask = [...maintask];
    copytask.splice(index, 1);
    setMaintask(copytask);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 py-8 px-4">
      <h1 className="text-center text-4xl font-bold text-indigo-700 mb-10">
        🌟 My To-Do List
      </h1>

      <form
        onSubmit={submitHandler}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 md:flex-row md:items-center"
      >
        <input
          type="text"
          placeholder="Title"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={desc}
          onChange={changedesc}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          ➕ Add Task
        </button>
      </form>

      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-indigo-800">Your Tasks</h2>
          <span className="bg-indigo-100 text-indigo-800 font-medium px-3 py-1 rounded-full text-sm">
            {maintask.length} {maintask.length === 1 ? "Task" : "Tasks"}
          </span>
        </div>

        {maintask.length === 0 ? (
          <p className="text-gray-500 text-center py-4">🚫 No tasks yet. Add some!</p>
        ) : (
          <ul className="space-y-4">
            {maintask.map((task, index) => (
              <li
                key={index}
                className="bg-slate-100 rounded-lg shadow flex items-center justify-between px-4 py-3 hover:bg-slate-200 transition"
              >
                <div className="w-2/3">
                  <h5 className="text-lg font-bold text-slate-800">{task.title}</h5>
                  <p className="text-slate-600 text-sm">{task.desc}</p>
                </div>
                <button
                  onClick={() => deleteHandler(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1.5 rounded-lg transition"
                >
                  🗑️ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
