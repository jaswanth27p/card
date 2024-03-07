// src/App.js
import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center h-screen gap-8 p-4">
        <Card />
        <Card />
        <Card />
      </div>
      <p className="text-center"> I couldn't find shadow functionality in the shadcn library</p>
    </>
  );
}

export default App;
