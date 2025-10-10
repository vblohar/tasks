import { Component, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss'
})
export class TaskForm {
  task = input<Task | null>(null);

    formData = {
      title: '',
      description: '',
      completed: false
    }

    onSubmit(){
      const newTask: Task = {
        id: +new Date,
        title: this.formData.title,
        description: this.formData.description,
        createdAt: new Date(),
        completed: false
      }
      console.log(newTask);
    }
}
