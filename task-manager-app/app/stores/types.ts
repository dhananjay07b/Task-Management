import { types } from 'mobx-state-tree';

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
