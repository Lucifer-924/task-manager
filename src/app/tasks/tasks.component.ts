import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS} from './task/dummy-tasks';
import {NewTaskComponent} from './new-task/new-task.component';

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

  @Input({required:true}) userId!: string;
  @Input({required:true}) name?: string;

  isAddingTask = false;

  taskList = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.taskList.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  onAddNewTask(){
    this.isAddingTask = true;
  }
  onCancelTask(){
    this.isAddingTask = false;
  }
}
