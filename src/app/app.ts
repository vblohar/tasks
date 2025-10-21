import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItem } from "./components/main-block/task-item/task-item";
import { TaskForm } from "./components/main-block/task-form/task-form";
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskItem, TaskForm, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tasks');
}
