import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {type NewTask} from '../dto/TasksDto';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;

  constructor(private taskService: TaskService) {
  }

  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getTasksByUserId(this.userId);
  }

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onStartAddNewTask() {
    this.isAddingTask = true;
  }

  onCancelTask() {
    this.isAddingTask = false;
  }

  onAddNewTask(newTask: NewTask) {
    this.isAddingTask = false;
    this.taskService.addNewTask(newTask, this.userId);
  }
}
