import React from "react";
import { FiDownload, FiRefreshCw, FiSettings, FiPlay } from "react-icons/fi";

const Practice = () => {
  const easyProblems = [
    {
      id: 1,
      title: "Two Sum",
      description: "Find two numbers that add up to a target",
      successRate: "75%",
    },
    {
      id: 2,
      title: "Reverse String",
      description: "Reverse a given string",
      successRate: "82%",
    },
  ];

  const mediumProblems = [
    {
      id: 3,
      title: "Longest Substring",
      description: "Find longest substring without repeating char",
      successRate: "65%",
    },
    {
      id: 4,
      title: "Rotated Array Search",
      description: "Search in a rotated sorted array",
      successRate: "70%",
    },
  ];

  const hardProblems = [
    {
      id: 5,
      title: "N-Queens",
      description: "Solve N-Queens problem",
      successRate: "40%",
    },
    {
      id: 6,
      title: "Word Ladder",
      description: "Transform word using dictionary",
      successRate: "52%",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
        {/* Easy Problem */}
        <div className="bg-white p-5  shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Easy Problems
            </h2>
            <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-600 border border-green-300">
              45 Available
            </span>
          </div>
          {easyProblems.map((p) => (
            <div
              key={p.id}
              className="border p-4 mb-4 flex justify-between items-start hover:shadow-sm transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Success rate {p.successRate}
                </p>
              </div>
              <button className="ml-4 text-sm px-3 py-1 rounded border border-red-700 text-red-700 hover:bg-red-300 cursor-pointer">
                Solve
              </button>
            </div>
          ))}
        </div>

        {/* Medium Problems */}
        <div className="bg-white p-5  shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Medium Problems
            </h2>
            <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 border border-yellow-300">
              30 Available
            </span>
          </div>
          {mediumProblems.map((p) => (
            <div
              key={p.id}
              className="border p-4 mb-4 flex justify-between items-start hover:shadow-sm transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Success rate {p.successRate}
                </p>
              </div>
              <button className="ml-4 text-sm px-3 py-1 rounded border border-red-500 text-red-500 hover:bg-red-300 cursor-pointer">
                Solve
              </button>
            </div>
          ))}
        </div>

        {/* Hard Problems */}
        <div className="bg-white p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Hard Problems
            </h2>
            <span className="text-sm px-3 py-1 rounded-full bg-red-100 text-red-600 border border-red-300">
              18 Available
            </span>
          </div>
          {hardProblems.map((p) => (
            <div
              key={p.id}
              className="border  p-4 mb-4 flex justify-between items-start hover:shadow-sm transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Success rate {p.successRate}
                </p>
              </div>
              <button className="ml-4 text-sm px-3 py-1 rounded border border-red-500 text-red-500 hover:bg-red-300 cursor-pointer">
                Solve
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Section */}
      <div className="mx-6 bg-white p-6 rounded-xs shadow-sm mt-4">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">
          Your Progress
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-5 rounded-xs text-start">
            <p className="font-medium text-green-950">Easy Problems</p>
            <p className="text-2xl font-semibold text-green-900 mt-1">24/45</p>
            <p className="text-xs text-green-600 mt-1">53% Completed</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-xs text-start">
            <p className="font-medium text-yellow-950">Medium Problems</p>
            <p className="text-2xl font-semibold text-yellow-900 mt-1">12/32</p>
            <p className="text-sm text-yellow-600 mt-1">37% Completed</p>
          </div>
          <div className="bg-red-50 p-5 rounded-lg text-start">
            <p className="font-medium text-red-950">Hard Problems</p>
            <p className="text-2xl font-semibold text-red-900 mt-1">5/18</p>
            <p className="text-sm text-red-600 mt-1">28% Completed</p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className=" flex flex-wrap justify-around gap-8  pb-2 mt-52 bg-white shadow-md  w-full top-2 left-0 ">
        <button className=" flex bg-red-800 items-center gap-2  text-white px-6 py-2 rounded shadow  cursor-pointer mt-5  hover:bg-red-900 ">
          <FiPlay /> Practice Problems
        </button>
        <button className=" flex items-center gap-2 border  px-6 py-2 rounded shadow hover:bg-gray-50 cursor-pointer mt-5 ">
          <FiDownload /> Export Report
        </button>
        <button className="flex items-center gap-2 border px-6 py-2 rounded shadow hover:bg-gray-50 cursor-pointer mt-5">
          <FiRefreshCw /> Update Profile
        </button>
        <button className="flex items-center gap-2 border px-6 py-2 rounded shadow hover:bg-gray-50 cursor-pointer mt-5">
          <FiSettings /> Settings
        </button>
      </div>
    </div>
  );
};

export default Practice;
