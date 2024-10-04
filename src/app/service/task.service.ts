import { Injectable } from '@angular/core';
import {DUMMY_TASKS} from '../tasks/task/dummy-tasks';
import {NewTask} from '../dto/TasksDto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList = DUMMY_TASKS;

  constructor() {
    const storageTasks = localStorage.getItem('tasks');

    if(storageTasks) {
      this.taskList = JSON.parse(storageTasks);
    }
  }

  getTasksByUserId(userId: string) {
    return this.taskList.filter((task) => task.userId === userId);
  }

  removeTask(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  addNewTask(newTask: NewTask, userId:  string) {
    this.taskList.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });

    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}
