import {Component, EventEmitter, Output} from '@angular/core';
import {NewTask} from '../../dto/TasksDto';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();


  inputTitle = '';
  inputSummary= '';
  inputDueDate= '';

  onCancelAddTask() {
    this.cancel.emit();
  }

  onSubmitNewTask() {
    this.add.emit({
        title: this.inputTitle,
        summary: this.inputSummary,
        dueDate: this.inputDueDate,
      }
    )
  }
}
