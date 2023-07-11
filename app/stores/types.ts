import { types, flow, getRoot } from 'mobx-state-tree';
import { Instance, IStateTreeNode } from 'mobx-state-tree';
import { taskStore, persistStore } from './taskStore';

export const Task = types
  .model('Task', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    status: types.enumeration(['To-Do', 'In Progress', 'Completed']),
  })
  .actions((self) => ({
    updateStatus(newStatus: string) {
      self.status = newStatus;
    },
  }));

export const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask: flow(function* (task: typeof Task.Type) {
      self.tasks.push(task);
      yield Promise.resolve(getRoot<IRootStore>(self).persistStore.persist());
    }),
    updateTaskStatus: flow(function* (taskId: string, newStatus: string) {
      const task = self.tasks.find((t) => t.id === taskId);
      if (task) {
        task.updateStatus(newStatus);
        yield Promise.resolve(getRoot<IRootStore>(self).persistStore.persist());
      }
    }),
    deleteTask: flow(function* (taskId: string) {
      const taskIndex = self.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1);
        yield Promise.resolve(getRoot<IRootStore>(self).persistStore.persist());
      }
    }),
  }));

export interface IRootStore {
  taskStore: Instance<typeof TaskStore>;
  persistStore: typeof persistStore & {
    persist: () => void;
  };
}

export type IRootInstance = Instance<typeof TaskStore>;
