"use client"

import AddTaskBotton from "./components/AddTaskButton";
import Header from "./components/Header";
import TaskTable from "./components/TaskTable";
import { persistStore } from "./stores/taskStore";
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Persisted store initialization'); // Add this line
    persistStore
      .rehydrate()
      .then(() => {
        console.log('Persisted store rehydrated'); // Add this line
        // Store is initialized and data is loaded (if available)
      })
      .catch((error) => {
        console.error('Failed to initialize store:', error);
      });
  }, []);

  return (
    <main className="max-w-5xl mx-auto mt-4">
      <div className="text-center my-10 flex flex-col gap-4">
        <Header />
        <AddTaskBotton />
        <TaskTable />
      </div>
    </main>
  );
}
