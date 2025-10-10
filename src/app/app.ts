import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItem } from "./components/task-item/task-item";
import { TaskForm } from "./components/task-form/task-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskItem, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tasks');
}
