import { Component, input, output } from '@angular/core';
import { Task } from '../../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-item',
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {
  task = input<Task>();
  onEdit = output<Task>();
  onDelete = output<number>();
  onToggle = output<Task>();

  onToggleComplete() {
    const updatedTask = { 
      ...this.task(), 
      completed: !this.task()?.completed 
    };
    // this.onToggle.emit(updatedTask);
  }
}
