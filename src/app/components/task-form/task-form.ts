import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss'
})
export class TaskForm {
  task = input<Task | null>(null);
  onCancel = output<void>();

    formData = {
      title: '',
      description: '',
      completed: false
    }

    onSubmit(){
      if(this.formData.title && this.formData.description){
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
}
