import React from "react";
import Posts from "./components/Posts";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold mt-6 bg-black text-white p-4 w-full text-center shadow-md">
        Posts
      </h1>
      <Posts />
    </div>
  );
};

export default App;

