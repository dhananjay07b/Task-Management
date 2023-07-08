"use client"
import { types, Instance, destroy } from 'mobx-state-tree';
import { create } from 'mobx-persist';
import localForage from 'localforage-observable'; // or import other storage libraries

// Define the task model
const TaskModel = types.model('Task', {
  id: types.identifierNumber,
  title: types.string,
  description: types.string,
  status: types.enumeration(['To-Do', 'In Progress', 'Completed']),
});

// Define the task store
const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(TaskModel),
  })
  .actions((self) => ({
    addTask(task: typeof TaskModel.Type) {
      self.tasks.push(task);
    },
    updateTaskStatus(taskId: number, newStatus: string) {
      const task = self.tasks.find((t) => t.id === taskId);
      if (task) {
        task.status = newStatus;
      }
    },
    deleteTask(taskId: number) {
      const taskIndex = self.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex !== -1) {
        destroy(self.tasks[taskIndex]);
      }
    },
  }));

// Create an instance of the task store
const taskStore = TaskStore.create({ tasks: [] });

// Create a persist instance
const persistInstance = create({
  storage: localForage, // or any other storage library
  jsonify: true, // optional, converts data to JSON before storing
});

// Wrap the taskStore with persist
const persistStore = persistInstance('taskStore', taskStore);

// Initialize the persisted store
persistStore
  .rehydrate()
  .then(() => {
    // Store is initialized and data is loaded (if available)
  })
  .catch((error) => {
    // Handle any initialization errors
    console.error('Failed to initialize store:', error);
  });

export type ITaskStore = Instance<typeof TaskStore>;
export { taskStore, persistStore };
